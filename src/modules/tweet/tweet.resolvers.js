import Tweet from './tweet.model';

export default {
  getTweets: () => Tweet.find({})
}
