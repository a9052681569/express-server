import { RequestHandler, Router } from "express";
import { getReminders } from "./handlers/get-reminders";
import { markSended } from "./handlers/mark-sended";

const handlers: RequestHandler[] = [
	getReminders,
	markSended
]

export const remindersRouter = Router().use('/reminders', ...handlers);
