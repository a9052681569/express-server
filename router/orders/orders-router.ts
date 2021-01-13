import { RequestHandler, Router } from "express";
import { ordersForPrepairing } from "./handlers/for/preparing";
import { ordersByPersonId } from "./handlers/get-by-person-id";
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
	patchOrderSended,
	patchOrderTrack,
	removeOrder
]

export const ordersRouter = Router().use('/orders', ...handlers);
