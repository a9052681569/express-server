/**
 * возможные виды отправки
 */
export enum ShipmentTypes {
	cdek = 'сдэк',
	post = 'почта',
	courier = 'курьер'
}

/**
 * возможные типы заказа
 */
export enum OrderTypes {
	check = 'пробный',
	subscription = 'подписка',
}

/**
 * возможные типы заказов при отправке
 */
export enum ShipmentOrderTypes {
	twoThree = '2-3',
	fourSix = '4-6',
	sevenNine = '7-9',
	complicated = 'сложные',
	theatres = 'театры'
}

/**
 * возможные диапазоны возрастов
 */
export enum OrderAges {
	twoThree = '2-3',
	fourSix = '4-6',
	sevenNine = '7-9'
}

