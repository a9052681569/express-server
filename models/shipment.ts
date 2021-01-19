import { ShipmentTypes, OrderAges } from "./enums/order/order-enums";
import { PersonAddress } from "./person";

export interface ShipmentFilterData {
	shipmentDate: string;
	shipmentType: ShipmentPreparingShipmentTypes;
	ordersType: ShipmentPreparingOrderTypes;
	noTrack: boolean;
}

export interface ShipmentPreparingOrder {
	id: string;
	name: string;
	address: PersonAddress;
	phone: string;
	trackNumber: string;
	sended: boolean;
}

export type ShipmentPreparingOrderTypes = OrderAges | 'сложные' | 'театры' | 'все';

export type ShipmentPreparingShipmentTypes = ShipmentTypes | 'все';


export interface BaseCredStructure {
	shipmentDate: string;
	shipmentType?: ShipmentPreparingShipmentTypes;
	trackNumber?: any;
}
