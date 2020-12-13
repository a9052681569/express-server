import { Router } from 'express';
import { Collection, ObjectID } from 'mongodb';
import { Order } from '../../../models/order';

export const patchOrder = Router();
	
patchOrder.post('/patch', (req, res) => {

	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const order: Order = req.body;

	const _id = new ObjectID(order._id);

	ordersCollection.findOneAndUpdate({_id}, {$set: {...order, _id}})
		.then(() => {
			res.send(order);
		})
		.catch(err => {
			console.error(err)
			res.sendStatus(504)
		});

});
