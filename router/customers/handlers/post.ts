import { Router } from 'express';
import { Collection } from 'mongodb';
import { Paging } from '../../../models/paging';
import { Person } from '../../../models/person';

export const postCustomer = Router();
	
postCustomer.post('/post', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const customer: Person = req.body;

	people.insertOne(customer, (err, added) => {
		if (err) return console.log(err);
		
		res.send(added.ops);

	});
});
