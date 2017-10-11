import faker from 'faker';
import { Seeder } from 'mongoose-data-seed';
import Tweet from '../modules/tweet/tweet.model';

const TWEETS_TOTAL = 10;

class TweetsSeeder extends Seeder {
  async beforeRun() {
    await Tweet.remove();
    this.postsData = this._generatePosts();
  }

  async shouldRun() {
    return Tweet.count().exec().then(count => count === 0);
  }

  async run() {
    return Tweet.create(this.postsData);
  }

  _generatePosts() {
    return Array.from({ length: TWEETS_TOTAL }).map(() => {
      return {
        text: faker.lorem.paragraphs(1)
      };
    });
  }
}

export default TweetsSeeder;