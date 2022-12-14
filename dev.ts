import { walk } from "walk";
import { parse } from "flags";

const template = (IMPORTS: string[], ROUTES: string[]) =>
	`// DO NOT EDIT. This file is generated by deno.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running dev.ts

import { Handler } from "$types/routes.ts";
${IMPORTS.join(";\n")}

export type ROUTES = {
	${ROUTES.join("\n	").replaceAll(/\$([0-9])*\d/g, "Handler;")}
};

export type Manifest = {
	routes: ROUTES;
	baseUrl: string;
};

const manifest: Manifest = {
	routes: {
		${ROUTES.join(",\n		")}
	},
	baseUrl: import.meta.url,
};

export default manifest;
`;

const IMPORTS: string[] = [];
const ROUTES: string[] = [];
let i = 0;

const routes_path = walk("./src/routes", {
	exts: [".ts"],
	includeDirs: false,
});

for await (const route of routes_path) {
	let name = route.path
		.replace(/src\/routes|index|\.ts$/g, "")
		.replace(/\[\.{3}.+\]/, "*")
		.replace(/\[(.+)\]/, ":$1");

	name = name.endsWith("/") && name.length > 1 ? name.slice(0, -1) : name;

	IMPORTS.push(`import $${i} from "./${route.path}"`);
	ROUTES.push(`"${name}": $${i}`);

	i++;
}

const args = parse(Deno.args);

await Deno.writeTextFile("./routes.ts", template(IMPORTS, ROUTES));

if (!args["no-server"])
	await Deno.run({ cmd: ["deno", "task", "start"] }).status();
