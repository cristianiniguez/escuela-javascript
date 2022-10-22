import boom from '@hapi/boom';
import { User } from '../db/models/user.model';

type CreateUserDTO = {
  email: string;
  password: string;
  role: string;
};

type UpdateUserDTO = Partial<CreateUserDTO>;

class UsersService {
  async create(data: CreateUserDTO) {
    const newUser = await User.create(data);
    return newUser;
  }

  async find() {
    const result = await User.findAll({ include: ['customer'] });
    return result;
  }

  async findOne(id: number) {
    const user = await User.findByPk(id);
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    return user;
  }

  async update(id: number, data: UpdateUserDTO) {
    const user = await User.findByPk(id);
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    const result = await user.update(data);
    return result;
  }

  async delete(id: number) {
    const user = await User.findByPk(id);
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    await user.destroy();
    return id;
  }
}

export default UsersService;
