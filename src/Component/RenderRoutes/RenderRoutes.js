import "./renderRoutes.scss";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AdminLayout } from "../AdminLayout";

import { routesConfig } from "../../config";

let routesList = null;
const RenderRoutes = (props) => {
	const renderRoutesFn = () => {
		const userRoutes = routesConfig["admin"];
		let i = null;
		routesList =
			userRoutes &&
			userRoutes.map((route, index) => {
				i = index;
				return (
					<Route
						key={i}
						exact={route.exact}
						path={`${route.path}`}
						component={route.component}
						name={route.name}
					/>
				);
			});
		routesList.push(
			<Route key={i + 1} component={() => <Redirect to="/home" />} />
		);
		return (
			<AdminLayout>
				<Switch>{routesList}</Switch>
			</AdminLayout>
		);
	};

	return <>{renderRoutesFn()}</>;
};

export { RenderRoutes };
