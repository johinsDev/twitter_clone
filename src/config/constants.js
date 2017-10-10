require('dotenv').config();

const defaultConfig = {
  PORT: process.env.PORT || 3000
};

const devConfig = {
   MONGO_URL: process.env.MONGO_URL_DEV
};

const prodConfig = {
  MONGO_URL: process.env.MONGO_URL_PROD
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
