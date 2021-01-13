import { Router } from 'express';
import { Collection, DeleteWriteOpResultObject, FindAndModifyWriteOpResultObject } from 'mongodb';
import { Order } from '../../../models/order';
import { Person } from '../../../models/person';

export const removeCustomer = Router();
	
removeCustomer.post('/remove', (req, res) => {

	const peopleCollection: Collection<Person> = req.app.locals.people;
	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const {id}: {id:string} = req.body;

	peopleCollection.findOneAndDelete({id})
		.then((c: FindAndModifyWriteOpResultObject<Person>) => {

			
			if (c.value) {
				ordersCollection.deleteMany({personId: id})
					.then((o: DeleteWriteOpResultObject) => {
						
						if (o.result.ok) {
							console.log('удалили', c.value.name, 'и', o.deletedCount, 'его(её) заказа(ов)');
							res.send({id: c.value.id});
						} else {
							res.sendStatus(504);
						}
						
					})
					.catch(err => {
						console.error(err)
						res.sendStatus(504)
					});
			} else {
				res.sendStatus(504);
			}
			
		})
		.catch(err => {
			console.error(err)
			res.sendStatus(504)
		});

});
