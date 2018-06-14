import fs from 'fs';

export default class UserService {

  get() {
    return fs.createReadStream(`${process.cwd()}/data/users.json`);
  }

  getById(id) {
    return {
      "_id": id,
      "first_name": "Magda",
      "last_name": "Jahns",
      "email": "mjahns0@1und1.de",
      "gender": "Female",
      "ip_address": "24.130.24.236"
    };
  }
}