import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { GraphQLFieldResolver as Resolver } from 'graphql';
import { Express } from 'express';

const typeDefs = `
  type Query {
    hello: String!
    getPerson(name: String!, age: Int!): String!
  }
`;

const getPerson: Resolver<unknown, unknown, { name: string; age: number }, string> = (_, args) =>
  `Hello, my name is ${args.name}, and I'm ${args.age} year(s) old.`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    getPerson,
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
