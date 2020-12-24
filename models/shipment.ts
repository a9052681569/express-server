import { ShipmentTypes, OrderAges } from "./enums/order/order-enums";
import { PersonAddress } from "./person";

export interface ShipmentFilterData {
	shipmentDate: string;
	shipmentType: ShipmentTypes;
	ordersType: OrderAges | 'сложный';
}

export interface ShipmentPreparingOrder {
	id: string;
	name: string;
	address: PersonAddress;
	phone: string;
	trackNumber: string;
	sended: boolean;
}