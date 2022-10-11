import { walk } from "walk";
import { Application, Router } from "oak";
import type { Handler } from "$types/routes.ts";

const app = new Application();
const router = new Router();

const ROUTES = walk("./routes", {
	exts: [".ts"],
	includeDirs: false,
});

for await (const route of ROUTES) {
	const name = route.path
		.replace(/routes|index|\.ts$/g, "")
		.replace(/\[\.{3}.+\]/, "*")
		.replace(/\[(.+)\]/, ":$1");

	const handler = (await import("./" + route.path)) as {
		default: Handler;
	};

	if (handler.default)
		router.all(
			name.endsWith("/") && name.length > 1 ? name.slice(0, -1) : name,
			handler.default
		);
}

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
