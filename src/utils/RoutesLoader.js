import _ from "lodash";
import path from "path";
import FileLoader from "./FileLoader";

export default class RoutesLoader extends FileLoader {

  constructor(application, container) {
    super(`${process.cwd()}/src/routes`);
    this.application = application;
    this.container = container;
  }

  async load() {
    try {
      const routes = await this.loadFiles();

      return this.registerRoutes(routes);
    } catch (error) {
      return Promise.reject("Can't load routes!" + error);
    }
  }

  registerRoutes(routes) {
    _.forEach(routes, (route) => {
      this.registerRoute(route);
    });
  }

  registerRoute(route) {
    const filename = path.basename(route);
    const routePath = _.first(filename.split('.'));
    const Router = require(route).default;
    const routeInstance = new Router(this.container);

    this.application.use(`/api/${routePath}`, routeInstance.getRouter());
  }

}