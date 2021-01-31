import { RequestHandler, Router } from "express";
import { getConversion } from "./handlers.ts/get-conversion";

const handlers: RequestHandler[] = [
	getConversion
]

export const conversionRouter = Router().use('/conversion', ...handlers);
