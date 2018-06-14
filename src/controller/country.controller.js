export default class CountryController {

  constructor(countryService) {
    this._userService = countryService;
  }

  get(req, res) {
    this._userService.get().pipe(res);
  }

  getById(req, res) {
    const { id } = req.params;

    res.send(this._userService.getById(id));
  }
}