import GraphQLDate from 'graphql-date';

import TweetResolvers from '../../modules/tweet/tweet.resolvers';
import UserResolvers from '../../modules/User/user.resolvers';
import User from '../../modules/User/user.model';

export default {
  Date: GraphQLDate,
  Tweet: {
    user: ({ user }) => User.findById(user)
  },
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
    me: UserResolvers.me
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signUp: UserResolvers.signUp,
    signIn: UserResolvers.login
  }
}
