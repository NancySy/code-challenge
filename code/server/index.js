import express from 'express';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import Schema from './schema';
import Resolvers from './resolvers';

const GRAPHQL_PORT = 4000;
const graphQLServer = express();

/** defining the schema and the resolvers of the server **/
const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
});

graphQLServer.use('*', cors({ origin: 'http://localhost:3000' }));

graphQLServer.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema: executableSchema,
    context: {}
  })
);

graphQLServer.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
  )
);
