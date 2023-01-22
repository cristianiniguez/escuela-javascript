import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { GraphQLFieldResolver as Resolver } from 'graphql';
import { Express } from 'express';

const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String!, age: Int!): String!
    getInt(int: Int!): Int!
    getFloat(float: Float!): Float!
    getString(string: String!): String!
    getBoolean(boolean: Boolean!): Boolean!
    getID(id: ID!): ID!
    getNumbers(numbers: [Int!]!): [Int!]!
    getProduct: Product
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    image: String!
    createdAt: String!
  }
`;

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
    getProduct: () => ({
      id: 1,
      name: 'Shoes Adidas',
      price: 108.2,
      description: 'Shoes made in China',
      image: 'https://shoes.com/adidas.jpeg',
      createdAt: new Date().toISOString(),
    }),
  },
};

const useGraphQL = async (app: Express) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();
  server.applyMiddleware({ app });
};

export default useGraphQL;
