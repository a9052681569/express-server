import { RequestHandler, Router } from "express";
import { customerAutocomplete } from "./handlers/autocomplete";
import { getCustomers } from "./handlers/get";
import { patchCustomer } from "./handlers/patch";
import { postCustomer } from "./handlers/post";
import { removeCustomer } from "./handlers/remove";

const handlers: RequestHandler[] = [
	getCustomers,
	customerAutocomplete,
	postCustomer,
	patchCustomer,
	removeCustomer
]

export const customersRouter = Router().use('/people', ...handlers);
