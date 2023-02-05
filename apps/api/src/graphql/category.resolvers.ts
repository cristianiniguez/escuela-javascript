import boom from '@hapi/boom';
import { GraphQLFieldResolver as Resolver } from 'graphql';
import { Context } from 'graphql-passport/lib/buildContext';
import CategoriesService, { CreateCategoryDTO } from '../services/categories.service';

const categoriesService = new CategoriesService();

export const addCategory: Resolver<
  unknown,
  Context<Express.User>,
  { input: CreateCategoryDTO }
> = async (_, { input }, context) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) throw boom.unauthorized('invalid jwt');

  return categoriesService.create(input);
};
