import WelcomeController from "../src/requests/welcomeController";

const routes = (app) => {

	app.get("/", new WelcomeController().index);

};


export default routes;