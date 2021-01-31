import { Router } from 'express';
import { Collection } from 'mongodb';
import { Person } from '../../../../../models/person';

export const markSended = Router();
	
markSended.post('/sended', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const data: MarkReminderSendedData = req.body;

	people.findOne({ id: data.id }, { projection: { _id: 0 } })
		.then(customer => {
			const currentReminderIndex = customer.reminders.findIndex(r => r.date === data.date);

			const reminders = customer.reminders;

			reminders[currentReminderIndex].sended = data.sended;

			people.findOneAndUpdate({ id: data.id }, { $set: { reminders } }, {returnOriginal: false})
				.then(e => {
					if (e.ok) {
						res.send(data);
					} else {
						res.sendStatus(404);
					}
				})

		})

});

export interface MarkReminderSendedData {
	id: string;
	date: string;
	sended: boolean;
}


