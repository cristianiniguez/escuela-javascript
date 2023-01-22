import { GraphQLFieldResolver as Resolver } from 'graphql';
import ProductsService from '../services/products.service';

const productsService = new ProductsService();

export const getProducts: Resolver<unknown, unknown> = () => productsService.find({});

export const getProduct: Resolver<unknown, unknown, { id: string }> = (_, { id }) =>
  productsService.findOne(+id);

export const addProduct: Resolver<unknown, unknown> = () => ({});
