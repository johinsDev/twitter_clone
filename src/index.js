/* eslint-disable no-console */
/**
 * Server setup
 */
import chalk from 'chalk';
import express from 'express';

import './config/db';
import constants from './config/constants';
import middlewaresConfig from './config/middlewares';

const app = express();

middlewaresConfig(app);

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
