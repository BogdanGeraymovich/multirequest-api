export default class UserController {

  constructor(userService) {
    this._userService = userService;
  }

  get(req, res) {
    this._userService.get().pipe(res);
  }

  getById(req, res) {
    const { id } = req.params;

    res.send(this._userService.getById(id));
  }
}