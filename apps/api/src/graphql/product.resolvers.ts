import { GraphQLFieldResolver as Resolver } from 'graphql';

export const getProducts: Resolver<unknown, unknown> = () => [];

export const getProduct: Resolver<unknown, unknown, { id: string }> = (_, { id }) => ({});

export const addProduct: Resolver<unknown, unknown> = () => ({});
