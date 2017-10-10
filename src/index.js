/* eslint-disable no-console */
/**
 * Server setup
 */
import chalk from 'chalk';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

import './config/db';
import typeDefs from './graphql/schema';
import constants from './config/constants';
import resolvers from './graphql/resolvers';
import middlewaresConfig from './config/middlewares';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

middlewaresConfig(app);

app.use('/graphiql', graphiqlExpress({
  endpointURL: constants.GRAPHQL_PATH
}));

app.use(
  constants.GRAPHQL_PATH, graphqlExpress({
    schema
  }),
);

app.listen(constants.PORT, (err) => {
  if (err) {
    console.log(chalk.red('Cannot run!'));
  } else {
    console.log(
      chalk.green.bold(
        `
      Yep this is working 🍺
      App listen on port: ${constants.PORT} 🍕
      Env: ${process.env.NODE_ENV} 🦄
    `,
      ),
    );
  }
});
