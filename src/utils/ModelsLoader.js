import UserModel from '../models/User.model';
import CountryModel from '../models/Country.model';
import CustomerModel from '../models/Customer.model';

export default class ModelsLoader {
  constructor() {
    this.userModel = UserModel;
    this.countryModel = CountryModel;
    this.customerModel = CustomerModel;
  }
}