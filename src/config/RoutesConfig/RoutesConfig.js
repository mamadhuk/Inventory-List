import { Home } from "../../Component/Home";

const routesConfig = {
	admin: [
		{
			path: "/home",
			component: Home,
			exact: true,
		},
	],
};

export { routesConfig };
