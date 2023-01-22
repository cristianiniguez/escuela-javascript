import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { loadFiles } from '@graphql-tools/load-files';
import { Express } from 'express';
import resolvers from './resolvers';

const useGraphQL = async (app: Express) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./src/**/*.graphql'),
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });

  await server.start();
  server.applyMiddleware({ app });
};

export default useGraphQL;
