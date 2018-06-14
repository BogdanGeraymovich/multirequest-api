import express from 'express';
import bodyParser from 'body-parser';
import config from '../config';
import { ContainerBuilder, JsonFileLoader } from 'node-dependency-injection';

import RoutesLoader from './utils/RoutesLoader';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const init = async () => {
  try {
    let container = new ContainerBuilder();
    let loader = new JsonFileLoader(container);
    loader.load(`${process.cwd()}/config/services`);
    const routesLoader = new RoutesLoader(app, container);
    await routesLoader.load();

    app.listen(config.port, () => {
      console.log(`App started at ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

init();