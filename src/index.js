import express from 'express';
import bodyParser from 'body-parser';
import config from '../config';
import { ContainerBuilder, JsonFileLoader } from 'node-dependency-injection';

import RoutesLoader from './utils/RoutesLoader';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const initServiceContainer = () => {
  let container = new ContainerBuilder();
  let loader = new JsonFileLoader(container);
  loader.load(`${process.cwd()}/config/services`);

  return container;
};

const loadRoutes = (container) => {
  const routesLoader = new RoutesLoader(app, container);
  return routesLoader.load();
};

const init = async () => {
  try {
    const container = initServiceContainer();
    await loadRoutes(container);

    app.listen(config.port, () => {
      console.log(`App started at ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

init();