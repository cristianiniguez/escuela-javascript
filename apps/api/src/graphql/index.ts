import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { Express } from 'express';

const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
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
