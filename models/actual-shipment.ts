import { ShipmentOrderTypes, ShipmentTypes } from './enums/order/order-enums';
import { OrderStructure } from './order';
import { PersonAddress } from './person';

export interface ASShipmentTypeState {
	shipmentType: ShipmentTypes;
	ordersByType: ASOrderTypeState[];
}

export interface ASOrderTypeState {
	ordersType: ShipmentOrderTypes;
	orders: ActualShipmentOrder[];
}

export interface ActualShipmentOrder {
	name: string;
	orderStructure: OrderStructure;
	comment: string;
	address: PersonAddress;
	orderId: string;
	sended: boolean;
}

export interface ASFilterFormData {
	shipmentDate: string;
	shipmentType: ShipmentTypes | 'все';
	notSended: boolean;
}
