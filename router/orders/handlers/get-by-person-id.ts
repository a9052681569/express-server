import { Router } from 'express';
import { Collection } from 'mongodb';

export const ordersByPersonId = Router();
	
ordersByPersonId.post('/by/personid', (req, res) => {
	const ordersCollection: Collection = req.app.locals.orders;

	const personId: number = req.body.personId;

	ordersCollection.find({ personId }).toArray((err, orders) => {
		if (err) return console.log(err);
		
		res.send(orders);
	})

})