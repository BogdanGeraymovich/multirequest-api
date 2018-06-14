export default class CustomerController {

  constructor(customerService) {
    this._userService = customerService;
  }

  get(req, res) {
    this._userService.get().pipe(res);
  }

  getById(req, res) {
    const { id } = req.params;

    res.send(this._userService.getById(id));
  }
}