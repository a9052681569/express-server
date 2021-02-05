import * as json2xls from 'json2xls';
import { Router } from 'express';
import { Collection } from 'mongodb';
import { Order } from '../../../models/order';
import { writeFile, writeFileSync, readFileSync } from 'fs';
import * as xlsx from 'xlsx';
import { ShipmentTypes } from '../../../models/enums/order/order-enums';
import { Person } from '../../../models/person';

export const getCourierSheet = Router();
	
getCourierSheet.post('/couriersheet', (req, res) => {
	const ordersCollection: Collection<Order> = req.app.locals.orders;
	const peopleCollection: Collection<Person> = req.app.locals.people;

	const { date, notSendedYet }: { date: string, notSendedYet: boolean } = req.body;

	const cred: {
		shipmentDate: string,
		shipmentType: ShipmentTypes.courier,
		sended?: boolean
	} = {
		shipmentDate: date,
		shipmentType: ShipmentTypes.courier
	}

	if (notSendedYet) {
		cred.sended = false;
	}

	const fileName = `${date}-courier-sheet.xlsx`;
	const workbook = xlsx.utils.book_new()

	ordersCollection.find(cred).toArray()
		.then((orders: Order[]) => {
			const personIds: string[] = orders.map(o => o.personId);

			peopleCollection.find({ id: { $in: personIds } }).toArray()
				.then((customers: Person[]) => {
					const result: CourierSheetData[] = orders.map((order: Order) => {
						const customer = customers.find(c => c.id === order.personId);

						if (customer) {

							return {
								'Номер присвойки': order.trackNumber,
								'Получатель': 'Физическое лицо',
								'Город получателя': getCity(customer.address.city),
								'Адрес получателя': customer.address.address,
								'ФИО получателя': customer.name,
								'Телефон получателя': customer.contacts.phone,
								'Кол-во мест': '1',
								'Вес, кг': '1',
								'Длина, см': '30',
								'Ширина, см': '18',
								'Высота, см': '12',
								'Тариф': 'Эконом',
								'Наложенный платеж': '',
								'Сумма страховки': '',
								'Информация о доставке': 'позвонить заранее, набор для творчества Натворим',
							}
						}
					})

					xlsx.utils.book_append_sheet(workbook, xlsx.utils.json_to_sheet(result), fileName);

					res.send(workbook);

				})
				.catch((err) => {
					console.error(err);
					res.sendStatus(504);
				})
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(504);
		})

});

const getCity = (city: string): string => {
	if (city?.toLowerCase().startsWith('с')) return 'Санкт-Петербург';

	if (city?.toLowerCase().startsWith('м')) return 'Москва';

	return city;

}
		
export interface CourierSheetData {
	'Номер присвойки': string;
	'Получатель': string;
	'Город получателя': string;
	'Адрес получателя': string;
	'Кол-во мест': string;
	'Вес, кг': string;
	'Длина, см': string;
	'Ширина, см': string;
	'Высота, см': string;
	'Тариф': string;
	'Наложенный платеж': string;
	'Сумма страховки': string;
	'Информация о доставке': string;
	'ФИО получателя': string;
	'Телефон получателя': string;
}