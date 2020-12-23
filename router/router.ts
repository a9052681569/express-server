import { RequestHandler, Router } from "express";
import { authRouter } from "./auth/auth-router";
import { customersRouter } from "./customers/customers-router";
import { ordersRouter } from "./orders/orders-router";

const handlers: RequestHandler[] = [customersRouter, ordersRouter, authRouter];

export const appRouter = Router().use(...handlers);