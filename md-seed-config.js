import mongooseLib from 'mongoose';
import constants from './src/config/constants';
import Tweets from './src/seeders/tweets.seeder';


mongooseLib.Promise = global.Promise;

// Export the mongoose lib
export const mongoose = mongooseLib;

// Export the mongodb url
export const mongoURL = constants.MONGO_URL;

/*
  Seeders List
  ------
  order is important
*/
export const seedersList = {
  Tweets
};
