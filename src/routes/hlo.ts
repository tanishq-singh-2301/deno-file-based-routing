import { Handler } from "$types/routes.ts";

const handler: Handler = ({ response }) => {
	response.body = "hlo";
};

export default handler;
