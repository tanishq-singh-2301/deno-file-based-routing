import { Handler } from "$types/routes.ts";

const handler: Handler = ({ response }) => {
	response.body = "v2/kaju";
};

export default handler;
