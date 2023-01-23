import { GraphQLFieldResolver as Resolver } from 'graphql';
import ProductsService, { CreateProductDTO, UpdateProductDTO } from '../services/products.service';

const productsService = new ProductsService();

export const getProducts: Resolver<unknown, unknown> = () => productsService.find({});

export const getProduct: Resolver<unknown, unknown, { id: string }> = (_, { id }) =>
  productsService.findOne(+id);

export const addProduct: Resolver<unknown, unknown, { input: CreateProductDTO }> = (_, { input }) =>
  productsService.create(input);

export const updateProduct: Resolver<unknown, unknown, { id: string; input: UpdateProductDTO }> = (
  _,
  { id, input },
) => productsService.update(+id, input);

export const deleteProduct: Resolver<unknown, unknown, { id: string }> = (_, { id }) =>
  productsService.delete(+id);
