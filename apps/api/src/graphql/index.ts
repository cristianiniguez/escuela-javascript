import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { loadFiles } from '@graphql-tools/load-files';
import { buildContext } from 'graphql-passport';
import { Express } from 'express';
import resolvers from './resolvers';

const useGraphQL = async (app: Express) => {
  const server = new ApolloServer({
    context: ({ req, res }) => buildContext({ req, res }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    resolvers,
    typeDefs: await loadFiles('./src/**/*.graphql'),
  });

  await server.start();
  server.applyMiddleware({ app });
};

export default useGraphQL;
