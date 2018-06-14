import { Router } from 'express';

export default class BaseRoute {
  constructor(container) {
    this.router = Router();
    this.container = container;
  }

  getRouter() {
    return Promise.reject("Method is not implemented");
  }

}