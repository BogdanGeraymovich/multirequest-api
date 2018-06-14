import config from '../config/config';

import loadFixtures from 'mongoose-fixture-loader';
import UserModel from './models/User.model';
import CountryModel from './models/Country.model';
import CustomerModel from './models/Customer.model';

import UserData from '../data/users';
import CountryData from '../data/countries';
import CustomerData from '../data/customers';
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

Promise.all([
  loadFixtures(UserModel, UserData),
  loadFixtures(CountryModel, CountryData),
  loadFixtures(CustomerModel, CustomerData),
])
  .then(() => { console.log('Fixtures loaded'); });