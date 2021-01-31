import { Router } from 'express';
import { Collection } from 'mongodb';
import { Person, Reminder } from '../../../../../models/person';


export const getReminders = Router();
	
getReminders.post('/get', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const { date }: {date: string} = req.body;

	people.find({ reminders: { $elemMatch: { date } } }, { projection: { _id: 0 } }).toArray((err, customers: Person[]) => {
		if (err) return console.log(err);

		const reminders: ReminderView[] = customers.map(c => {
			const currentReminder = c.reminders.find(r => r.date === date);

			return {
				personId: c.id,
				phone: c.contacts.phone,
				inst: c.contacts.inst,
				sended: currentReminder.sended
			}
		});
		
		res.send(reminders);

	});

});

export interface ReminderView {
	personId: string;
	phone?: string;
	inst?: string;
	sended: boolean;
}
