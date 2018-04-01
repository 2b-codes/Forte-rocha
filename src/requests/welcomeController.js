import React from "react";
import ReactDOMServer from "react-dom/server";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Welcome from "../containers/welcome";
import Reducers from "../reducers/index";

export default class WelcomeController {

	index(request, response) {
		const store = createStore(Reducers);
		const html = ReactDOMServer.renderToString(<Provider store={store}><Welcome /></Provider>);
		const data = {
			html,
			seo: {
				title: "New Project",
				description: ""
			}
		};

		response.render("index", { data });
	
	}

}