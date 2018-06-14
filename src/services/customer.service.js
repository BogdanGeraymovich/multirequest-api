import fs from 'fs';

export default class CustomerService {

  get() {
    return fs.createReadStream(`${process.cwd()}/data/customers.json`);
  }

  getById(id) {
    return {
      "_id": id,
      "first_name": "Huey",
      "last_name": "Bewshaw",
      "email": "hbewshaw0@oracle.com",
      "gender": "Male",
      "ip_address": "185.94.247.26",
      "country": "Canada",
      "city": "Smiths Falls",
      "balance": "$6.39",
      "currency": "CAD"
    };
  }
}