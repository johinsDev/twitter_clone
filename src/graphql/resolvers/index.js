import TweetResolvers from '../../modules/tweet/tweet.resolvers';
import UserResolvers from '../../modules/User/user.resolvers';

export default {
  Query: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets
  },
  Mutation: {
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signUp: UserResolvers.signUp,
    signIn: UserResolvers.login
  }
}