import TweetResolvers from '../../modules/tweet/tweet.resolvers';

export default {
  Query: {
    getTweets: TweetResolvers.getTweets
  }
}