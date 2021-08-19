import "./App.css";

import React from "react";
import { Router } from "react-router-dom";
import { history } from "../config";
import { RenderRoutes } from "./RenderRoutes";
import { ErrorBoundary } from "./ErrorBoundary";

class App extends React.Component {
	render() {
		return (
			<>
				<ErrorBoundary>
					<Router history={history}>
						<RenderRoutes />
					</Router>
				</ErrorBoundary>
			</>
		);
	}
}

export default App;
