import { Handler } from "$types/routes.ts";

const handler: Handler = ({ response }) => {
	response.body = "index.ts";
};

export default handler;
