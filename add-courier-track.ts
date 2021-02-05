import { Collection, FindAndModifyWriteOpResultObject, MongoClient } from 'mongodb';
import { ShipmentTypes } from './models/enums/order/order-enums';
import { Order } from './models/order';
import { Person, Reminder } from "./models/person";
import {MONGO_OPTIONS} from './mongo/config/options'
import { MONGO_URL } from "./mongo/config/url";


const mongoClient = new MongoClient(MONGO_URL, MONGO_OPTIONS);


mongoClient.connect().then((client: MongoClient) => {

	const db = client.db("testdb");
	const peopleCollection: Collection<Person> = db.collection("people")
	const ordersCollection: Collection<Order> = db.collection("orders");

	ordersCollection.find({ shipmentType: ShipmentTypes.courier }).toArray()
		.then((orders: Order[]) => {

			const uniqueMonths: string[] = []

			orders.forEach(o => {
				if (!uniqueMonths.includes(o.shipmentDate)) {
					uniqueMonths.push(o.shipmentDate);
				}
			})
			console.log(uniqueMonths);
			uniqueMonths.forEach(m => {
				
				ordersCollection.find({ shipmentType: ShipmentTypes.courier, shipmentDate: m }).toArray()
					.then((ords: Order[]) => {
						console.log(m, ords.length);
						ords.forEach((o: Order, index: number) => {
							addCourierTrack(ordersCollection, o, index + 1);
						})
					})
			})
		});
	

});


const addCourierTrack = (ordersCollection: Collection<Order>, order: Order, i: number): void => {
	
	const trackNumber = `${order.shipmentDate.slice(0, 2)}-${i}`;
	
	ordersCollection.findOneAndUpdate({ id: order.id }, { $set: { trackNumber } })
		.then(p => {
			// console.log(p.value.trackNumber);
		})
		.catch(err => {
			console.error('Ошибка при добавлении номера курьеру', err);
		})
}
