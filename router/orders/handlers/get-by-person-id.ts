import { Router } from 'express';
import { Collection } from 'mongodb';
import { Order } from '../../../models/order';

export const ordersByPersonId = Router();
	
ordersByPersonId.post('/by/personid', (req, res) => {
	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const personId: string = req.body.personId;

	ordersCollection.find({ personId }, {projection: {_id: 0}}).toArray((err, orders) => {
		if (err) return console.log(err);
		
		res.send(orders);
	})

})