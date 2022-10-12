import { Handler } from "$types/routes.ts";

const handler: Handler = ({ response, params }) => {
	response.body = `v1/my-name/${params.name}`;
};

export default handler;
