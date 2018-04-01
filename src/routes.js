import React from "react";
import { Router, Route, browserHistory, historyLocation } from "react-router";

import Welcome from "./containers/welcome";

export default () => {

	return (
		<Router history={browserHistory}>
			<Route path="/" component={Welcome} />
		</Router>
	);
};