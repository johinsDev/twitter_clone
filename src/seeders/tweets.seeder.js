import faker from 'faker';
import { Seeder } from 'mongoose-data-seed';
import Tweet from '../modules/tweet/tweet.model';
import User from '../modules/User/user.model';

const TWEETS_TOTAL = 3;
const USERS_TOTAL = 10;

class TweetsSeeder extends Seeder {
  async beforeRun() {
    await Tweet.remove();
    await User.remove();

    await User.create(this._generateUser());

    this._users = await User.find({});
    this.postsData = this._generatePosts();
  }

  async shouldRun() {
    return Tweet.count().exec().then(count => count === 0);
  }

  async run() {
    return Tweet.create(this.postsData);
  }

  _generateUser() {
    return Array.from({ length: USERS_TOTAL }).map((_, i) => {
    	const user ={
        username: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: `https://randomuser.me/api/portraits/women/${i}.jpg`,
        password: 'password123'
	    };
      return user;
    });
  }

  _generatePosts() {
    let data = [];
    this._users.forEach((user) => {
      const tweets = Array.from({ length: TWEETS_TOTAL }).map(() => {
        const tweet = {
          text: faker.lorem.sentence(),
          user: user._id
        };
        return tweet;
      })
      data = data.concat(tweets);
    });
    return data;
  }
}

export default TweetsSeeder;
