import Tweet from './tweet.model';
import { requireAuth } from '../User/user.services';

export default {
  getTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.findById(_id);
    } catch(error) {
      throw error;
    }
  },
  getTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  },
  createTweet: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.create({ ...args, user: user.id });
    } catch (error) {
      throw error;
    }
  },
  updateTweet: async (_, { _id, ...rest }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({_id, user: user.id });

     if (!tweet) {
     	throw new Error('Not Found');
     }

     Object.entries(rest).forEach(([key, value]) => {
      tweet[key] = value
     });

     return tweet.save();
    } catch (error) {
      throw error;
    }
  },
   getUserTweets: async (_, args, { user }) => {
    try {
      await requireAuth(user);
      return Tweet.find({ user: user.id }).populate('user').sort({ createdAt: -1 })
    } catch (error) {
      throw error;
    }
  },
  deleteTweet: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user);
      const tweet = await Tweet.findOne({_id, user: user.id });

      if (!tweet) {
     	  throw new Error('Not Found');
      }

      await tweet.remove();

      return {
        message: 'Delete Success!'
      }
    } catch (error) {
      throw error;
    }
  }
}
