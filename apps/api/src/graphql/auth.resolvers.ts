import { GraphQLFieldResolver as Resolver } from 'graphql';
import { Context } from 'graphql-passport/lib/buildContext';
import AuthService from '../services/auth.service';
import { User } from '../db/models/user.model';

const authService = new AuthService();

export const login: Resolver<
  unknown,
  Context<Express.User>,
  { email: string; password: string }
> = async (_, { email, password }, context) => {
  const { user } = await context.authenticate('graphql-local', { email, password });
  if (!user) return null;

  const accessToken = authService.signToken(user as User);
  return { accessToken, user };
};
