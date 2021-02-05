import { RequestHandler, Router } from "express";
import { ordersForActualShipment } from "./handlers/for/actual-shipment";
import { ordersForPrepairing } from "./handlers/for/preparing";
import { ordersByPersonId } from "./handlers/get-by-person-id";
import { getCourierSheet } from "./handlers/get-courier-sheet";
import { patchActualShipmentSended } from "./handlers/patch/actual-shipment-sended";
import { patchOrder } from "./handlers/patch/patch";
import { patchOrderSended } from "./handlers/patch/sended";
import { patchOrderTrack } from "./handlers/patch/track";
import { postOrder } from "./handlers/post";
import { removeOrder } from "./handlers/remove";

const handlers: RequestHandler[] = [
	ordersByPersonId,
	postOrder,
	patchOrder,
	ordersForPrepairing,
	ordersForActualShipment,
	patchOrderSended,
	patchOrderTrack,
	removeOrder,
	patchActualShipmentSended,
	getCourierSheet
]

export const ordersRouter = Router().use('/orders', ...handlers);
