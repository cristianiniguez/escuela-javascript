import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import { ROLE, User } from '../db/models/user.model';
import { Context } from 'graphql-passport/lib/buildContext';

export const hashPassword = (password: string) => bcrypt.hash(password, 10);

export const verifyPassword = (password: string, hash: string): Promise<boolean> =>
  bcrypt.compare(password, hash);

export const checkJWT = async (context: Context<Express.User>) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) throw boom.unauthorized('invalid jwt');
  return user;
};

export const checkRoles = (user: User, roles: ROLE[]) => {
  if (!roles.includes(user.role)) throw boom.unauthorized('not allowed');
};
