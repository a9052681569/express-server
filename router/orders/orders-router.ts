import { RequestHandler, Router } from "express";
import { ordersByPersonId } from "./handlers/get-by-person-id";
import { patchOrder } from "./handlers/patch";
import { postOrder } from "./handlers/post";

const handlers: RequestHandler[] = [ordersByPersonId, postOrder, patchOrder]

export const ordersRouter = Router().use('/orders', ...handlers);
