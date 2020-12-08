import express = require("express");
import { Collection, MongoClient } from 'mongodb';
import { Person } from "./models/person";
import {MONGO_OPTIONS} from './mongo/config/options'
import { MONGO_URL } from "./mongo/config/url";
import { readFileSync } from "fs";
import { Paging } from "./models/paging";

const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const port = 3000;

const peopleFile = readFileSync('./people2020.json', 'utf8');
const ordersFile = readFileSync('./orders2020.json', 'utf8');

const peopleArr = JSON.parse(peopleFile);
const ordersArr = JSON.parse(ordersFile);

app.use(express.static('front/natvorim-crm'));
app.use(express.json());
app.set('trust proxy', '84.201.179.234')

MongoClient.connect(MONGO_URL, MONGO_OPTIONS, function (err, client) {
	if (err) return console.error(err);

	const db = client.db("ntv-db");
	const peopleCollection = db.collection("people")
	const ordersCollection = db.collection("orders");

    app.locals.people = peopleCollection;
	app.locals.orders = ordersCollection;

	app.listen(port, function(){
		console.log(`Подключились к БД, сервер ожидает на порту ${port}`);
	});

})



app.get(/backoffice/, (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
  	res.redirect('/')
})

app.post('/people/paging', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const paging: Paging = req.body;

	people.find({}, {min: paging.start, max: paging.end}).toArray((err, customers: Person[]) => {
		if (err) return console.log(err);
		
		console.log(customers);
		res.send(customers);

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
