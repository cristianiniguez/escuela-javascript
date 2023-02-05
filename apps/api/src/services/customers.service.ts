import boom from '@hapi/boom';
import _ from 'lodash';
import { Customer } from '../db/models/customer.model';
import { hashPassword } from '../utils/auth';

type CreateCustomerDTO = {
  name: string;
  lastName: string;
  phone?: string;
  user: {
    email: string;
    password: string;
  };
};

type UpdateCustomerDTO = {
  name?: string;
  lastName?: string;
  phone?: string;
  userId?: number;
};

class CustomersService {
  async create(data: CreateCustomerDTO) {
    data.user.password = await hashPassword(data.user.password);
    const newCustomer = await Customer.create(data, { include: ['user'] });
    const customerObject = newCustomer.toJSON();
    const userObject = newCustomer.user?.toJSON() || {};
    return { ...customerObject, user: _.omit(userObject, ['password']) };
  }

  find() {
    return Customer.findAll({ include: ['user'] });
  }

  async findOne(id: number) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw boom.notFound(`Customer with id ${id} not found`);
    return customer;
  }

  async update(id: number, data: UpdateCustomerDTO) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw boom.notFound(`Customer with id ${id} not found`);
    const result = await customer.update(data);
    return result;
  }

  async delete(id: number) {
    const customer = await Customer.findByPk(id);
    if (!customer) throw boom.notFound(`Customer with id ${id} not found`);
    await customer.destroy();
    return id;
  }
}

export default CustomersService;
