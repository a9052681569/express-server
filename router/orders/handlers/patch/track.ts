import { Router } from 'express';
import { Collection, ObjectId, ObjectID } from 'mongodb';
import { Order } from '../../../../models/order';

export const patchOrderTrack = Router();
	
patchOrderTrack.post('/patch/track', (req, res) => {

	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const cred: { id: string, trackNumber: string } = req.body;
	
	ordersCollection.findOneAndUpdate({ id: cred.id }, { $set: { trackNumber: cred.trackNumber } }, { returnOriginal: false })
		.then(o => {
			if (o.value) {
				res.send(o.value.trackNumber);
			} else {
				res.sendStatus(504);
			}
		})

});
