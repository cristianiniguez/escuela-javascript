import boom from '@hapi/boom';
import { ROLE, User } from '../db/models/user.model';
import _ from 'lodash';
import { hashPassword } from '../utils/auth';

type CreateUserDTO = {
  email: string;
  password: string;
  role: ROLE;
};

type UpdateUserDTO = Partial<CreateUserDTO> & {
  resetPasswordToken?: string;
};

class UsersService {
  async create(data: CreateUserDTO) {
    data.password = await hashPassword(data.password);
    const newUser = await User.create(data);
    return _.omit(newUser.toJSON(), ['password']);
  }

  async find() {
    const result = await User.findAll({
      attributes: { exclude: ['password'] },
      include: ['customer'],
    });
    return result;
  }

  findByEmail(email: string) {
    return User.findOne({ where: { email } });
  }

  async findOne(id: number) {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
      include: ['customer'],
    });
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    return user;
  }

  async update(id: number, data: UpdateUserDTO) {
    const user = await User.findByPk(id);
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    const updatedUser = await user.update(data);
    return _.omit(updatedUser.toJSON(), ['password']);
  }

  async delete(id: number) {
    const user = await User.findByPk(id);
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    await user.destroy();
    return id;
  }
}

export default UsersService;
