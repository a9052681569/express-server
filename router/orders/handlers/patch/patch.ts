import { Router } from 'express';
import { Collection, ObjectId, ObjectID } from 'mongodb';
import { Order } from '../../../../models/order';

export const patchOrder = Router();
	
patchOrder.post('/patch', (req, res) => {

	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const order: Order = req.body;

	ordersCollection.findOneAndUpdate({id: order.id}, {$set: {...order}}, {returnOriginal: false})
		.then((o) => {
			if (o.value) {
				res.send(o.value);
			} else {
				res.sendStatus(504);
			}
			
		})
		.catch(err => {
			console.error(err)
			res.sendStatus(504)
		});

});
