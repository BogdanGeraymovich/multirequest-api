import BaseRoute from '../utils/BaseRoute';

export default class CountriesRoute extends BaseRoute {
  constructor(container) {
    super(container);
    this.controller = container.get('countryController');
  }

  getRouter() {
    this.router.get('/', this.controller.get.bind(this.controller));
    this.router.get('/:id', this.controller.getById.bind(this.controller));

    return this.router;
  }
};