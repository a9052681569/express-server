import { RequestHandler, Router } from "express";
import { conversionRouter } from "./conversion/conversion-handler";

const handlers: RequestHandler[] = [
	conversionRouter
]

export const widgetRouter = Router().use('/widgets', ...handlers);
