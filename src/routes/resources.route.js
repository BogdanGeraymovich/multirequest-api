import BaseRoute from '../utils/BaseRoute';
import config from '../../config';
import multirequest from 'multi-request';

export default class UserRoute extends BaseRoute {
  constructor(container) {
    super(container);
  }

  getRouter() {
    this.router.get('/', multirequest(config.baseUrl));

    return this.router;
  }
};