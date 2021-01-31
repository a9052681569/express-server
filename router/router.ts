import { RequestHandler, Router } from "express";
import { authRouter } from "./auth/auth-router";
import { customersRouter } from "./customers/customers-router";
import { ordersRouter } from "./orders/orders-router";
import { widgetRouter } from "./widgets/widgets-router";

const handlers: RequestHandler[] = [customersRouter, ordersRouter, authRouter, widgetRouter];

export const appRouter = Router().use(...handlers);