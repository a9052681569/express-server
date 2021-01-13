import { Router } from 'express';
import { Collection, ObjectId, ObjectID } from 'mongodb';
import { Order } from '../../../models/order';

export const removeOrder = Router();
	
removeOrder.post('/remove', (req, res) => {

	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const {id}: {id:string} = req.body;

	ordersCollection.findOneAndDelete({id})
		.then((o) => {
			
			if (o.value) {
				res.send({id: o.value.id});
			} else {
				res.sendStatus(504);
			}
			
		})
		.catch(err => {
			console.error(err)
			res.sendStatus(504)
		});

});
