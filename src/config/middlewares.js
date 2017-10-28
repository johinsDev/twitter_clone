/* eslint-disable no-param-reassign  */

import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

import { decodeToken } from '../modules/User/user.services';
import typeDefs from '../graphql/schema';
import constants from '../config/constants';
import resolvers from '../graphql/resolvers';

const isDev = process.env.NODE_ENV === 'development';
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (token != null) {
      const user = await decodeToken(token);
      req.user = user;
    } else {
      req.user = null;
    }
    return next();
  } catch (error) {
    throw error;
  }
}

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(auth);
  if (isDev) {
    const morgan = require('morgan');

    app.use(morgan('dev'));
  }
  app.use('/graphiql', graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH
  }));

  app.use(
    constants.GRAPHQL_PATH, graphqlExpress(req => ({
      schema,
      context: {
        user: req.user
      }
    })),
  );
}

