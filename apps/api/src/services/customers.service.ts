import boom from '@hapi/boom';
import { Customer } from '../db/models/customer.model';

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
    return Customer.create(data, { include: ['user'] });
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
