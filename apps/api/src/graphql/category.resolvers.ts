import { GraphQLFieldResolver as Resolver } from 'graphql';
import CategoriesService, { CreateCategoryDTO } from '../services/categories.service';

const categoriesService = new CategoriesService();

export const addCategory: Resolver<unknown, unknown, { input: CreateCategoryDTO }> = (
  _,
  { input },
) => categoriesService.create(input);
