import express = require("express");
import { Collection, MongoClient } from 'mongodb';

const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const port = 80;
const hostname = '84.201.140.23';

app.use(express.static('front/natvorim-crm'));
app.use(express.json());

// let dbClient: MongoClient;

// mongoClient.connect((err, client) => {
// 	if (err) return console.error(err);
	
// 	const db = client.db("testdb");
// 	const peopleCollection = db.collection("people")
// 	const ordersCollection = db.collection("orders");
	
// 	dbClient = client;

//     app.locals.people = peopleCollection;
// 	app.locals.orders = ordersCollection;

    app.listen(port, function(){
		console.log(`Сервер ожидает подключения на порту ${port}`);
	});


// });



app.get(/backoffice/, (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
  	res.redirect('/')
})

app.post('/people/paging', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const paging = req.body;

	people.find().toArray((err, people: Person[]) => {
		if (err) return console.log(err);
		
		res.send(people.slice(paging.start, paging.end));

	});
});

app.post('/orders/by/personid', (req, res) => {
	const ordersCollection: Collection = req.app.locals.orders;

	const personId = req.body.personId;

	ordersCollection.find({ personId }).toArray((err, orders) => {
		if (err) return console.log(err);
		
		res.send(orders);
	})

})

// // прослушиваем прерывание работы программы (ctrl-c)
// process.on("SIGINT", () => {
//     dbClient.close();
//     process.exit();
// });


/**
 * объект с информацией о клиенте
 */
export interface Person {
	/**
	 * уникальный идентификатор клиента
	 */
	id: number;
	/**
	 * ФИО клиента
	 */
	name: string;
	/**
	 * контакты клиента
	 */
	contacts: PersonContacts;
	/**
	 * адрес доставки клиенту
	 */
	address: PersonAddress;
}

export interface PersonContacts {
	/**
	 * электронная почта клиента
	 */
	email?: string;
	/**
	 * номер телефона
	 */
	phone?: string;
	/**
	 * аккаунт инстаграмм
	 */
	inst?: string;
}

export interface PersonAddress {
	city: string;
	address: string;
}
