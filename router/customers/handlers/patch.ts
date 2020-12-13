import { Router } from 'express';
import { Collection, ObjectID } from 'mongodb';
import { Person } from '../../../models/person';

export const patchCustomer = Router();
	
patchCustomer.post('/patch', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const customer: Person = req.body;

	const _id = new ObjectID(customer._id);

	people.findOneAndUpdate({_id}, {$set: {...customer, _id}})
		.then(() => {
			res.send(customer);
		})
		.catch(err => {
			console.error(err)
			res.sendStatus(503)
		});
});
