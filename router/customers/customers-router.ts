import { RequestHandler, Router } from "express";
import { customerAutocomplete } from "./handlers/autocomplete";
import { getCustomers } from "./handlers/get";
import { patchCustomer } from "./handlers/patch";
import { postCustomer } from "./handlers/post";
import { remindersRouter } from "./handlers/reminders/reminders-router";
import { removeCustomer } from "./handlers/remove";
import { customerSearch } from "./handlers/search";

const handlers: RequestHandler[] = [
	getCustomers,
	customerAutocomplete,
	postCustomer,
	patchCustomer,
	removeCustomer,
	customerSearch,
	remindersRouter
]

export const customersRouter = Router().use('/people', ...handlers);
