import { Router } from 'express';
import { Collection, UpdateWriteOpResult } from 'mongodb';
import { Order } from '../../../../models/order';

export const patchActualShipmentSended = Router();
	
patchActualShipmentSended.post('/patch/actual-shipment-sended', (req, res) => {

	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const {data}: {data: ChangeAllSendedData} = req.body;

	ordersCollection.updateMany({id: { $in: data.ids }}, {$set: {sended: data.sended}})
		.then((o: UpdateWriteOpResult) => {
			if (o.result.ok) {
				res.send(data);
			} else {
				res.sendStatus(504);
			}
			
		})
		.catch(err => {
			console.error(err)
			res.sendStatus(504)
		});

});

export interface ChangeAllSendedData {
	ids: string[];
	sended: boolean;
}

