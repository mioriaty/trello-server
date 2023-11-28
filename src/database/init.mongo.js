import mongoose from 'mongoose';
import { countConnect } from '../helpers/check.connect';

const mongoUrl = 'mongodb://localhost:27017/shopDev';

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    // dev
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true });

    mongoose.connect(mongoUrl)
      .then(() => {
        console.log('Connected mongo db success', countConnect());
      })
      .catch(err => console.log('Connect error', err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

export const instanceMongoDb = Database.getInstance();
