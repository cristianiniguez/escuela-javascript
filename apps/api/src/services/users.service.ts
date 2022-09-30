import boom from '@hapi/boom';
import sequelize from '../libs/sequelize';

export type User = {
  id: string;
  email: string;
  password: string;
  createdAt: string;
};

class UsersService {
  async create(data: Pick<User, 'email' | 'password'>) {
    const newUser = await sequelize.models.User.create(data);
    return newUser;
  }

  async find() {
    const result = await sequelize.models.User.findAll();
    return result;
  }

  async findOne(id: number) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    return user;
  }

  async update(id: number, data: Partial<Pick<User, 'email' | 'password'>>) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    const result = await user.update(data);
    return result;
  }

  async delete(id: number) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    await user.destroy();
    return id;
  }
}

export default UsersService;
