import { Sequelize } from 'sequelize';
import { Customer, CustomerSchema } from './customer.model';
import { User, UserSchema } from './user.model';

function setupModels(sequelize: Sequelize) {
  User.init(UserSchema, User.config(sequelize));

  Customer.init(CustomerSchema, Customer.config(sequelize));
  Customer.associate(sequelize.models);
}

export default setupModels;
