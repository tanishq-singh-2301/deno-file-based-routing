import { Handler } from "$types/routes.ts";

const handler: Handler = ({ response }) => {
	response.body = "v1";
};

export default handler;
