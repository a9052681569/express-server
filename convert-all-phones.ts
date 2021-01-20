import { Collection, FindAndModifyWriteOpResultObject, MongoClient } from 'mongodb';
import { Person } from "./models/person";
import {MONGO_OPTIONS} from './mongo/config/options'
import { MONGO_URL } from "./mongo/config/url";


const mongoClient = new MongoClient(MONGO_URL, MONGO_OPTIONS);


mongoClient.connect().then((client: MongoClient) => {

	const db = client.db("testdb");
	const peopleCollection: Collection<Person> = db.collection("people")

	peopleCollection.find().toArray((err, people: Person[]) => {
		if (err) return console.log(err);

		people.forEach(p => {
			peopleCollection.findOneAndUpdate({ id: p.id }, { $set: { contacts: { ...p.contacts, phone: phoneValidator(p.contacts.phone) } } })
				.then((r: FindAndModifyWriteOpResultObject<Person>) => {
					console.log(r.value.contacts.phone);
				});
		})

	})

});

const phoneValidator = (phone: string): string => {

	if (phone) {

		const onlyDigits = phone.replace(/\D/g, '');

		let withoutCountryCode: string;

		if (onlyDigits.startsWith('7') || onlyDigits.startsWith('8')) {
			withoutCountryCode = onlyDigits.slice(1);
		} else {
			withoutCountryCode = onlyDigits;
		}

		if (phone !== withoutCountryCode) {
			return withoutCountryCode;
		}

	}

	return phone;
}

