require('dotenv').config();

const npsUtils = require('nps-utils');

const { rimraf, crossEnv, series, concurrent } = npsUtils;

module.exports = {
  scripts: {
     build: {
      description: 'Building in production environment.',
      default: series.nps('clean', 'build.build'),
      build: 'webpack',
    },
    clean: {
      description: 'Clean dist folder.',
      default: rimraf('dist'),
    },
    dev: {
      start: {
        description: 'Running on dev environment.',
        script: `${crossEnv('NODE_ENV=development')} nodemon dist/index.bundle.js`,
      },
      default: {
        script: concurrent.nps('dev.watch', 'dev.start'),
      },
      watch: {
        description: 'Webpack watch for change and compile.',
        script: 'webpack -w',
      },
      withDebug: {
        script: `${crossEnv('NODE_ENV=development')} MONGOOSE_DEBUG=true DEBUG=express:* nodemon dist/index.bundle.js`,
      },
      debug: {
        description: 'Running on dev environment with debug on.',
        script: concurrent.nps('dev.watch', 'dev.withDebug'),
      },
    },
    db: {
      initSeed: {
        description: 'init seeder config for database',
        script: 'md-seed init'
      },
      all:{
        description: 'Run all seeders',
        script: 'md-seed run'
      },
      seedTweets:{
        description: 'Run tweet seeders',
        script: 'md-seed run tweets'
      }
    },
  }
}
