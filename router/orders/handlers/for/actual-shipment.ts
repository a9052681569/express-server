import { Router } from 'express';
import { Collection } from 'mongodb';
import { ActualShipmentOrder, ASFilterFormData, ASShipmentTypeState } from '../../../../models/actual-shipment';
import { ShipmentOrderTypes, ShipmentTypes } from '../../../../models/enums/order/order-enums';
import { Order } from '../../../../models/order';
import { Person } from '../../../../models/person';
import { BaseCredStructure, ShipmentFilterData, ShipmentPreparingOrder } from '../../../../models/shipment';


export const ordersForActualShipment = Router();
	
ordersForActualShipment.post('/for/actual-shipment', (req, res) => {
	const ordersCollection: Collection<Order> = req.app.locals.orders;
	const peopleCollection: Collection<Person> = req.app.locals.people;

	const filterData: ASFilterFormData = req.body;

	const credentials: {
		shipmentDate: string;
		shipmentType?: ShipmentTypes;
		sended?: boolean;
	} = { 
		shipmentDate: filterData.shipmentDate,
	};
	
	if (filterData.shipmentType !== 'все') {
		credentials.shipmentType = filterData.shipmentType;
	}

	if (filterData.notSended) {
		credentials.sended = false;
	}

	

	ordersCollection.find(credentials).toArray((err, orders) => {
		if (err) return console.log(err);

		const personIds = orders.map(o => o.personId);

		peopleCollection.find({ id: { $in: personIds } }).toArray((err, customers) => {
			if (err) return console.log(err);
			const result: ASShipmentTypeState[] = orders.reduce((acc: ASShipmentTypeState[], o: Order) => {
				const person: Person = customers.find(p => p.id === o.personId);

				if (person) {

					const currentOrder: ActualShipmentOrder = getActualShipmentOrder(o, person);
					const currentShipmentTypeState = acc.find(s => s.shipmentType === o.shipmentType);
					const currentOrderType = getCurrentOrderType(o);

					if (currentShipmentTypeState) {

						const currentOrderTypeState = currentShipmentTypeState.ordersByType.find(ot => ot.ordersType === currentOrderType);
						
						if (currentOrderTypeState) {

							currentOrderTypeState.orders.push(currentOrder)

						} else {

							currentShipmentTypeState.ordersByType.push({
								ordersType: currentOrderType,
								orders: [currentOrder]
							})
						}

					} else {
						acc.push({
							shipmentType: o.shipmentType,
							ordersByType: [{
								ordersType: currentOrderType,
								orders: [currentOrder]
							}]
						})
					}

				}

				return acc;
			}, [])

			res.send(result);
		})
		
		
	})

})

const getActualShipmentOrder = (order: Order, person: Person): ActualShipmentOrder => {
	return {
		orderId: order.id,
		orderStructure: order.orderStructure,
		name: person.name,
		address: person.address,
		comment: order.comment,
		sended: order.sended
	}
}

const getCurrentOrderType = (order: Order): ShipmentOrderTypes => {
	if (isEasyOrder(order)) {
		return order.orderStructure.kits[0].age as unknown as ShipmentOrderTypes
	}

	if (isTheatreOrder(order)) {
		return ShipmentOrderTypes.theatres
	}

	return ShipmentOrderTypes.complicated
}

const isEasyOrder = (order: Order): boolean => {
	if (order.orderStructure.kits.length === 1 && !order.orderStructure.theatres.length) {
		if (order.orderStructure.kits[0].count === 1) {
			if (!order.comment) {
				return true;
			}
		}
	}

	return false;
}

const isTheatreOrder = (order: Order): boolean => {
	return order.orderStructure.theatres.length && !order.orderStructure.kits.length
}