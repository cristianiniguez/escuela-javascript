import { GraphQLFieldResolver as Resolver } from 'graphql';
import { Context } from 'graphql-passport/lib/buildContext';
import { ROLE, User } from '../db/models/user.model';
import CategoriesService, { CreateCategoryDTO } from '../services/categories.service';
import { checkJWT, checkRoles } from '../utils/auth';

const categoriesService = new CategoriesService();

export const addCategory: Resolver<
  unknown,
  Context<Express.User>,
  { input: Omit<CreateCategoryDTO, 'image'> & { image: URL } }
> = async (_, { input }, context) => {
  const user = await checkJWT(context);
  checkRoles(user as User, [ROLE.ADMIN]);

  return categoriesService.create({ ...input, image: input.image.href });
};

export const getCategory: Resolver<unknown, unknown, { id: string }> = (_, { id }) =>
  categoriesService.findOne(+id);
