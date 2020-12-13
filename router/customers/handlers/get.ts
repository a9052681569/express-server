import { Router } from 'express';
import { Collection } from 'mongodb';
import { Paging } from '../../../models/paging';
import { Person } from '../../../models/person';

export const getCustomers = Router();
	
getCustomers.post('/get', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const paging: Paging = req.body;

	people.find({}, {skip: paging.start, limit: paging.limit}).toArray((err, customers: Person[]) => {
		if (err) return console.log(err);
		
		res.send(customers);

	});
});
