import { Router } from 'express';
import { Collection } from 'mongodb';
import { OrderTypes } from '../../../../models/enums/order/order-enums';
import { Person, Reminder } from '../../../../models/person';

export const getConversion = Router();
	
getConversion.post('/get', (req, res) => {

	const people: Collection<Person> = req.app.locals.people;

	const { date }: {date: string} = req.body;

	people.find({reminders: {$elemMatch: {date}}}, {projection: {_id: 0}}).toArray((err, customers: Person[]) => {
		if (err) return console.log(err);

		const conversionData: ConversionData[] = getConversionDataArr(customers, date);
		
		res.send(conversionData);

	});

});

export const getConversionDataArr = (customers: Person[], date: string): ConversionData[] => {
	return customers.reduce((res: ConversionData[], customer: Person) => {
		const currentReminder: Reminder = customer.reminders.find(r => r.date === date);
		
		if (currentReminder) {
			// заполняем объект с данными по конверсии всех типов заказов
			const allTypesData: ConversionData = res.find(c => c.orderType === 'все')

			if (allTypesData) {
				if (currentReminder.sended) {
					allTypesData.sended++;
				}

				if (currentReminder.didNewOrder) {
					allTypesData.didNewOrder++;
				}
			} else {
				res.push({
					orderType: 'все',
					didNewOrder: currentReminder.didNewOrder ? 1 : 0,
					sended: currentReminder.sended ? 1 : 0,
					total: customers.length
				})
			}

			const typedData: ConversionData = res.find(c => c.orderType === currentReminder.orderType);

			if (typedData) {
				if (currentReminder.sended) {
					typedData.sended++;
				}

				if (currentReminder.didNewOrder) {
					typedData.didNewOrder++;
				}
			} else {
				res.push({
					orderType: currentReminder.orderType,
					didNewOrder: currentReminder.didNewOrder ? 1 : 0,
					sended: currentReminder.sended ? 1 : 0,
					total: getTotalTypedDataCount(customers, date, currentReminder.orderType)
				})
			}

			
		}

		return res;
	}, []);

}

export const getTotalTypedDataCount = (customers: Person[], date: string, type: OrderTypes): number => {
	
	return customers.filter(c => {
		const currentReminder: Reminder = c.reminders.find(r => r.date === date);
		return currentReminder.orderType === type;
	}).length;
}

export interface ConversionData {
	total: number;
	sended: number;
	didNewOrder: number;
	orderType: OrderTypes | 'все';
}

