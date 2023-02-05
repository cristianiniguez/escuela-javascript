import { GraphQLFieldResolver as Resolver } from 'graphql';
import { login } from './auth.resolvers';
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from './product.resolvers';
import { addCategory } from './category.resolvers';

const getPerson: Resolver<unknown, unknown, { name: string; age: number }, string> = (_, args) =>
  `Hello, my name is ${args.name}, and I'm ${args.age} year(s) old.`;

const getInt: Resolver<unknown, unknown, { int: number }, number> = (_, args) => args.int;
const getFloat: Resolver<unknown, unknown, { float: number }, number> = (_, args) => args.float;
const getString: Resolver<unknown, unknown, { string: string }, string> = (_, args) => args.string;
const getBoolean: Resolver<unknown, unknown, { boolean: boolean }, boolean> = (_, args) =>
  args.boolean;
const getID: Resolver<unknown, unknown, { id: string }, string> = (_, args) => args.id;
const getNumbers: Resolver<unknown, unknown, { numbers: number[] }, number[]> = (_, args) =>
  args.numbers;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    getPerson,
    getInt,
    getFloat,
    getString,
    getBoolean,
    getID,
    getNumbers,

    // Products
    products: getProducts,
    product: getProduct,
  },
  Mutation: {
    // Auth
    login,

    // Products
    addProduct,
    updateProduct,
    deleteProduct,

    // Categories
    addCategory,
  },
};

export default resolvers;
