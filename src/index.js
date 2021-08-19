import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

import "./index.scss";
import { Provider } from "react-redux";
import App from "./Component/App";
import reducers from "./store/reducers/index";

import thunk from "redux-thunk";

// app util
window.appinfo = {
	version: process.env.REACT_APP_BUILD_VER,
	env: process.env.REACT_APP_ENV,
};

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
