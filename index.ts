import express = require("express");
import { Collection, MongoClient } from 'mongodb';
import { Order } from "./models/order";
import { Person } from "./models/person";
import {MONGO_OPTIONS} from './mongo/config/options'
import { MONGO_URL } from "./mongo/config/url";
import { appRouter } from "./router/router";
import compression from 'compression';
import { createServer } from "http";

const mongoClient = new MongoClient(MONGO_URL, MONGO_OPTIONS);
const app = express();
const port = 80;
const host = '0.0.0.0';

app.use(express.static('front/natvorim-crm'));
app.use(express.json());
app.use(appRouter);
app.use(compression({level: 9}));
// app.set('trust proxy', host);

mongoClient.connect().then((client: MongoClient) => {

	const db = client.db("testdb");
	const peopleCollection: Collection<Person[]> = db.collection("people")
	const ordersCollection: Collection<Order[]> = db.collection("orders");

	app.locals.people = peopleCollection;
	app.locals.orders = ordersCollection;

	createServer(app).listen(port, host, function () {
		console.log(`Подключились к БД, сервер ожидает на порту ${port}`);
	});

});

app.get(/backoffice/, (req, res) => {
	res.redirect('/')
});
