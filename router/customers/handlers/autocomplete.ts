import { Router } from 'express';
import { Collection } from 'mongodb';
import { Paging } from '../../../models/paging';
import { Person } from '../../../models/person';

export const customerAutocomplete = Router();
	
customerAutocomplete.post('/autocomplete', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const { name }: {name: string} = req.body;

	people.find({name: { $regex: name, $options: 'i' }}, {limit: 5, projection: {_id: 0}}).toArray((err, customers: Person[]) => {
		if (err) return console.log(err);
		
		res.send(customers);

	});
});
