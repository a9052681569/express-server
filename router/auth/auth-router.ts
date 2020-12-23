import { RequestHandler, Router } from "express";
import { authMain } from "./handlers/main";

const handlers: RequestHandler[] = [authMain]

export const authRouter = Router().use('/auth', ...handlers);
