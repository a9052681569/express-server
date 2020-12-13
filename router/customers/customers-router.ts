import { RequestHandler, Router } from "express";
import { customerAutocomplete } from "./handlers/autocomplete";
import { getCustomers } from "./handlers/get";
import { patchCustomer } from "./handlers/patch";
import { postCustomer } from "./handlers/post";

const handlers: RequestHandler[] = [
	getCustomers,
	customerAutocomplete,
	postCustomer,
	patchCustomer,
]

export const customersRouter = Router().use('/people', ...handlers);
