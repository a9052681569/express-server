import { RequestHandler, Router } from "express";
import { customersRouter } from "./customers/customers-router";
import { ordersRouter } from "./orders/orders-router";

const handlers: RequestHandler[] = [customersRouter, ordersRouter];

export const appRouter = Router().use(...handlers);