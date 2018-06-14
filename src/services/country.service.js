import fs from 'fs';

export default class CountryService {

  get() {
    return fs.createReadStream(`${process.cwd()}/data/countries.json`);
  }

  getById(id) {
    return {
      "_id": id,
      "name": "Brazil",
      "language": "Bulgarian",
      "latitude": -28.3031653,
      "longlitude": -49.3450112,
      "country_code": "BR",
      "timezone": "America/Sao_Paulo"
    };
  }
}