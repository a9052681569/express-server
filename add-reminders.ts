import { Collection, FindAndModifyWriteOpResultObject, MongoClient } from 'mongodb';
import { Order } from './models/order';
import { Person, Reminder } from "./models/person";
import {MONGO_OPTIONS} from './mongo/config/options'
import { MONGO_URL } from "./mongo/config/url";


const mongoClient = new MongoClient(MONGO_URL, MONGO_OPTIONS);


mongoClient.connect().then((client: MongoClient) => {

	const db = client.db("testdb");
	const peopleCollection: Collection<Person> = db.collection("people")
	const ordersCollection: Collection<Order> = db.collection("orders");

	peopleCollection.find().toArray((err, people: Person[]) => {
		if (err) return console.log(err);
		
		people.forEach(p => {
			
			ordersCollection.find({ personId: p.id }).toArray((err, orders: Order[]) => {
				if (err) return console.log(err);
				if (orders.length > 1) {
					const sortedByShipmentDate = orders.sort((o1, o2) => Date.parse(o1.shipmentDate) - Date.parse(o2.shipmentDate))

					const lastOrder = sortedByShipmentDate[sortedByShipmentDate.length - 1];
	
					const reminder: Reminder = {
						date: lastOrder.shipmentDate,
						sended: false,
						didNewOrder: false
					}
	
					peopleCollection.findOneAndUpdate({ id: p.id }, { $set: { reminders: [reminder] } }, {returnOriginal: false})
						.then(e => {
							if (e.ok) {
								console.log(e.value.reminders);
							}
						})
				} else if (orders.length) {
					const reminder: Reminder = {
						date: orders[0].shipmentDate,
						sended: false,
						didNewOrder: false
					}
					peopleCollection.findOneAndUpdate({ id: p.id }, { $set: { reminders: [reminder] } }, {returnOriginal: false})
						.then(e => {
							if (e.ok) {
								console.log(e.value.reminders);
							}
						})
				} else {
					peopleCollection.findOneAndUpdate({ id: p.id }, { $set: { reminders: [] } }, {returnOriginal: false})
						.then(e => {
							if (e.ok) {
								console.log(e.value.reminders);
							}
						})
				}
				
			})

		})

	})

});

