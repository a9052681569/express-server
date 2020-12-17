import express = require("express");
import { Collection, MongoClient } from 'mongodb';
import { Order } from "./models/order";
import { Person } from "./models/person";
import {MONGO_OPTIONS} from './mongo/config/options'
import { MONGO_URL } from "./mongo/config/url";
import { appRouter } from "./router/router";
import { createServer } from "http";
import * as compression from 'compression';

const mongoClient = new MongoClient(MONGO_URL, MONGO_OPTIONS);
const app = express();
const port = 3000;
const host = 'localhost';

app.use(compression({level: 9}));
app.use(express.static('front/natvorim-crm'));
app.use(express.json());
app.use(appRouter);

mongoClient.connect().then((client: MongoClient) => {

	const db = client.db("testdb");
	const peopleCollection: Collection<Person[]> = db.collection("people")
	const ordersCollection: Collection<Order[]> = db.collection("orders");

	app.locals.people = peopleCollection;
	app.locals.orders = ordersCollection;

	app.listen(port, host, function () {
		console.log(`Подключились к БД, сервер ожидает на порту ${port}`);
	});

});

app.get(/backoffice/, (req, res) => {
	res.redirect('/')
});
