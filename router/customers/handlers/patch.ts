import { Router } from 'express';
import { Collection } from 'mongodb';
import { Person } from '../../../models/person';

export const patchCustomer = Router();
	
patchCustomer.post('/patch', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const customer: Person = req.body;

	people.findOneAndUpdate({id: customer.id}, {$set: {...customer}}, {returnOriginal: false})
		.then((c) => {
			if (c.value) {
				res.send(c.value);
			} else {
				res.sendStatus(504);
			}
		})
		.catch(err => {
			console.error(err)
			res.sendStatus(503)
		});
});
