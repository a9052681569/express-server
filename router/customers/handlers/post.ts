import { Router } from 'express';
import { Collection } from 'mongodb';
import { v4 } from 'uuid';
import { Person } from '../../../models/person';

export const postCustomer = Router();
	
postCustomer.post('/post', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const customer: Person = req.body;

	customer.id = v4();

	people.insertOne(customer, (err, added) => {
		if (err) return console.log(err);
		
		res.send(added.ops);

	});
});
