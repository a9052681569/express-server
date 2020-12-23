import { Router } from 'express';
import { Collection } from 'mongodb';
import { Order } from '../../../models/order';
import { v4 } from 'uuid';

export const postOrder = Router();
	
postOrder.post('/post', (req, res) => {

	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const orders: Order[] = req.body;

	orders.forEach((o: Order) => {
		o.id = v4();
	});

	ordersCollection.insertMany(orders, (err, orders) => {
		if (err) return console.log(err);
		
		res.send(orders.ops);

	});
});
