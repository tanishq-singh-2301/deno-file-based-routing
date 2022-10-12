import { Handler } from "$types/routes.ts";

const handler: Handler = ({ response }) => {
	response.body = "/";
};

export default handler;
