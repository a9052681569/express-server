import { Router } from 'express';
import { Collection } from 'mongodb';
import { Order } from '../../../models/order';
import { v4 } from 'uuid';
import { Person, Reminder } from '../../../models/person';
import { ShipmentTypes } from '../../../models/enums/order/order-enums';

export const postOrder = Router();
	
postOrder.post('/post', (req, res) => {

	const ordersCollection: Collection<Order> = req.app.locals.orders;
	const peopleCollection: Collection<Person> = req.app.locals.people;

	const orders: Order[] = req.body;

	orders.forEach((o: Order) => {
		o.id = v4();
	});

	addNewReminder(peopleCollection, orders);

	ordersCollection.insertMany(orders, (err, ordersRes) => {
		if (err) return console.log(err);
		
		res.send(ordersRes.ops);

		orders.forEach((o: Order) => {
			if (o.shipmentType === ShipmentTypes.courier) {
				addCourierTrack(ordersCollection, o);
			}
		})

	});
});

const addCourierTrack = (ordersCollection: Collection<Order>, order: Order): void => {
	ordersCollection.find({ shipmentType: order.shipmentType, shipmentDate: order.shipmentDate }).toArray()
		.then((orders: Order[]) => {
			const trackNumber = `${order.shipmentDate.slice(0, 2)}-${orders.length + 1}`;
			
			ordersCollection.findOneAndUpdate({ id: order.id }, { $set: { trackNumber } })
				.catch(err => {
					console.error('Ошибка при добавлении номера курьеру', err);
				})
		})
}

const addNewReminder = (peopleCollection: Collection<Person>, orders: Order[]): void => {
	peopleCollection.findOne({ id: orders[0].personId })
		.then(customer => {
			const sortedByShipmentDate = orders.sort((o1, o2) => Date.parse(o1.shipmentDate) - Date.parse(o2.shipmentDate))

			const lastOrder = sortedByShipmentDate[sortedByShipmentDate.length - 1];

			const reminder: Reminder = {
				date: lastOrder.shipmentDate,
				sended: false,
				didNewOrder: false,
				orderType: lastOrder.type
			}

			const newReminders = customer.reminders || [];

			if (newReminders.length) {
				newReminders[newReminders.length - 1].didNewOrder = true;
			}

			newReminders.push(reminder);

			peopleCollection.findOneAndUpdate({ id: customer.id }, { $set: { reminders: newReminders } }, { returnOriginal: false })
				.then(v => {
					console.log('успешно добавили напоминалку');
				})
		})
}
