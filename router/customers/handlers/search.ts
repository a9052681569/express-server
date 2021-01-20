import { Router } from 'express';
import { Collection } from 'mongodb';
import { Order } from '../../../models/order';
import { Person } from '../../../models/person';

export const customerSearch = Router();
	
customerSearch.post('/search', (req, res) => {

	const peopleCollection: Collection<Person> = req.app.locals.people;
	const ordersCollection: Collection<Order> = req.app.locals.orders;

	const { query }: { query: string } = req.body;

	const phoneQuery = query.split('').map(v => {
		if (v.includes('(') || v.includes(')')) {
			return "\\" + v;
		}
		return v;
	}).join('')

	const criteria = {
		$or: [
			{
				name: { $regex: query, $options: 'i' },
			},
			{
				'contacts.inst': { $regex: query, $options: 'i' },
			},
			{
				'contacts.email': { $regex: query, $options: 'ig' },
			},
			{
				'contacts.phone': { $regex: phoneQuery, $options: 'i' },
			},
		]
	}

	peopleCollection.find(criteria, {limit: 50}).toArray((err, customers: Person[]) => {
		if (err) return console.log(err);

		if (customers.length) {
			res.send(customers);
		} else {
			const orderCred = {
				$or: [
					{
						comment: { $regex: query, $options: 'i' }
					},
					{
						trackNumber: { $regex: query, $options: 'i' },
					}
				]
			}

			ordersCollection.find(orderCred).toArray((err, orders: Order[]) => {
				if (err) return console.log(err);

				const personIds = orders.map(o => o.personId)

				peopleCollection.find({ id: { $in: personIds } }).toArray((err, queryCustomers: Person[]) => {
					if (err) return console.log(err);

					res.send(queryCustomers)
				})

			})
		}
		
		

	});
});
