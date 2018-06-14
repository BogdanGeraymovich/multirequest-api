import BaseRoute from '../utils/BaseRoute';

export default class UserRoute extends BaseRoute {
  constructor(container) {
    super(container);
    this.controller = container.get('userController');
  }

  getRouter() {
    this.router.get('/', this.controller.get.bind(this.controller));
    this.router.get('/:id', this.controller.getById.bind(this.controller));

    return this.router;
  }
};