import { RouterMiddleware } from "oak";

export type Handler = RouterMiddleware<string, Record<string, any>>;

export type Route = {
	name: string;
	handler: Handler;
};
