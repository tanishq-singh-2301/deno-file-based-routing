import { Handler } from "$types/routes.ts";
import dummy from "$db/dummy.json" assert { type: "json" };

const handler: Handler = ({ response }) => {
	const res = new Response(JSON.stringify(dummy));

	response.body = res.body;
};

export default handler;
