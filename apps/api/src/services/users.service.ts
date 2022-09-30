import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';
import { Pool } from 'pg';
import pool from '../libs/postgres';
import sequelize from '../libs/sequelize';

export type User = {
  id: string;
  email: string;
  password: string;
  createdAt: string;
};

class UsersService {
  private users: User[] = [];
  private pool: Pool;

  constructor() {
    this.pool = pool;
    this.pool.on('error', console.error);
  }

  async create(data: Omit<User, 'id'>) {
    const newUser = { id: faker.datatype.uuid(), ...data };
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    const result = await sequelize.models.User.findAll();
    return result;
  }

  async findOne(id: string) {
    const user = this.users.find((p) => p.id === id);
    if (!user) throw boom.notFound(`User with id ${id} not found`);
    return user;
  }

  async update(id: string, data: Partial<Omit<User, 'id'>>) {
    const index = this.users.findIndex((p) => p.id === id);
    if (index === -1) throw boom.notFound(`User with id ${id} not found`);

    const user = this.users[index];
    const updatedUser = { ...user, ...data };
    this.users[index] = updatedUser;
    return updatedUser;
  }

  async delete(id: string) {
    const index = this.users.findIndex((p) => p.id === id);
    if (index === -1) throw boom.notFound(`User with id ${id} not found`);

    const [deletedUser] = this.users.splice(index, 1);
    return deletedUser;
  }
}

export default UsersService;
