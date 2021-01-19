import { Router } from 'express';
import { Collection } from 'mongodb';
import { Order } from '../../../../models/order';
import { Person } from '../../../../models/person';
import { BaseCredStructure, ShipmentFilterData, ShipmentPreparingOrder } from '../../../../models/shipment';


export const ordersForPrepairing = Router();
	
ordersForPrepairing.post('/for/prepaire', (req, res) => {
	const ordersCollection: Collection<Order> = req.app.locals.orders;
	const peopleCollection: Collection<Person> = req.app.locals.people;

	const filterData: ShipmentFilterData = req.body;

	let credentials;

	let baseCredStructure: BaseCredStructure;

	if (filterData.noTrack) {
		baseCredStructure = {
			shipmentType: filterData.shipmentType,
			shipmentDate: filterData.shipmentDate,
			trackNumber: {$in: ['', null]}
		}
	} else {
		baseCredStructure = {
			shipmentType: filterData.shipmentType,
			shipmentDate: filterData.shipmentDate
		}
	}

	if (filterData.shipmentType === 'все') {
		
		delete baseCredStructure.shipmentType;
	}


	if (filterData.ordersType === 'все') {

		credentials = baseCredStructure;

	} else if (filterData.ordersType === 'сложные') {
		credentials = {
			$or: [
				{
					...baseCredStructure,
					comment: {$nin: ['', null]}
				},
				{
					...baseCredStructure,
					'orderStructure.theatres.0': {$exists : true},
					'orderStructure.kits.0': {$exists : true},
				},
				{
					...baseCredStructure,
					'orderStructure.kits.1': {$exists : true}
				},
				{
					...baseCredStructure,
					'orderStructure.kits.0.count': { $gt: 1 }
				},
			]
		}

	} else if (filterData.ordersType === 'театры') {
		credentials = {
			...baseCredStructure,
			'orderStructure.kits': { $size: 0 },
			'orderStructure.theatres.0': {$exists : true}
		}
	} else {
		credentials = {
			...baseCredStructure,
			'orderStructure.kits': {
				$size: 1,
				$elemMatch: {
					age: filterData.ordersType,
					count: 1,
				}
			},
			'orderStructure.theatres': { $size: 0 },
			comment: {$in: ['', null]}
		}
	}

	ordersCollection.find(credentials).toArray((err, orders) => {
		if (err) return console.log(err);

		const personIds = orders.map(o => o.personId);

		peopleCollection.find({ id: { $in: personIds } }).toArray((err, customers) => {
			if (err) return console.log(err);
			const result: ShipmentPreparingOrder[] = orders.reduce((aсс: ShipmentPreparingOrder[], o: Order) => {
				const person: Person = customers.find(p => p.id === o.personId);

				if (person) {
					aсс.push({
						id: o.id,
						name: person.name,
						address: person.address,
						phone: person.contacts?.phone,
						trackNumber: o.trackNumber,
						sended: o.sended
					})
				}

				return aсс;
			}, [])

			res.send(result);
		})
		
		
	})

})