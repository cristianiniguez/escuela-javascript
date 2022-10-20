import boom from '@hapi/boom';
import sequelize from '../libs/sequelize';

type CreateCustomerDTO = {
  name: string;
  lastName: string;
  phone?: string;
  userId: number;
};

type UpdateCustomerDTO = Partial<CreateCustomerDTO>;

class CustomersService {
  create(data: CreateCustomerDTO) {
    return sequelize.models.Customer.create(data);
  }

  find() {
    return sequelize.models.Customer.findAll();
  }

  async findOne(id: number) {
    const customer = await sequelize.models.Customer.findByPk(id);
    if (!customer) throw boom.notFound(`Customer with id ${id} not found`);
    return customer;
  }

  async update(id: number, data: UpdateCustomerDTO) {
    const customer = await sequelize.models.Customer.findByPk(id);
    if (!customer) throw boom.notFound(`Customer with id ${id} not found`);
    const result = await customer.update(data);
    return result;
  }

  async delete(id: number) {
    const customer = await sequelize.models.Customer.findByPk(id);
    if (!customer) throw boom.notFound(`Customer with id ${id} not found`);
    await customer.destroy();
    return id;
  }
}

export default CustomersService;
