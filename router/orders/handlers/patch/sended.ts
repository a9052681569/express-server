import { Router } from 'express';
import { Collection, ObjectId, ObjectID } from 'mongodb';
import { Order } from '../../../../models/order';

export const patchOrderSended = Router();
	
patchOrderSended.post('/patch/sended', (req, res) => {

	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const cred: { id: string, sended: boolean } = req.body;
	
	ordersCollection.findOneAndUpdate({ id: cred.id }, { $set: { sended: cred.sended } }, { returnOriginal: false })
		.then(o => {		
			if (o.value) {
				res.send(o.value.sended);
			} else {
				res.sendStatus(504);
			}
		})

});
