import { Handler } from "$types/routes.ts";

const handler: Handler = ({ response }) => {
	response.body = "v2/my-name/index.ts";
};

export default handler;
