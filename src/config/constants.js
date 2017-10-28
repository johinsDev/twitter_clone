require('dotenv').config();

const defaultConfig = {
  PORT: process.env.PORT || 3000
};

const devConfig = {
   MONGO_URL: process.env.MONGO_URL_DEV,
   GRAPHQL_PATH: process.env.GRAPHQL_PATH_DEV,
   JWT_SECRET: process.env.JWT_SECRET
};

const prodConfig = {
  MONGO_URL: process.env.MONGO_URL_PROD,
  GRAPHQL_PATH: process.env.GRAPHQL_PATH_PROD,
  JWT_SECRET: process.env.JWT_SECRET
};

function envConfig(env) {
  switch(env) {
    case 'development':
      return devConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
