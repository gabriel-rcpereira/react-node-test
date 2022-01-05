import mongoose from "mongoose";

class MongooseService {
  private readonly mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  };

  private readonly retrySeconds = 5;

  private count = 0;

  constructor() {
    this.connectWithRetry();
  }

  public getMongoose = () => mongoose;

  private connectWithRetry = () => {
    console.log("Connecting on MongoDB database.");

    mongoose
      .connect("mongodb://user1:pass@localhost:27017/api-db", this.mongooseOptions)
      .then(() => {
        console.log("MongoDB is connected");
      })
      .catch((err) => {
        this.count += 1;

        console.error(
          `MongoDB connection unsuccessful (will retry #${this.count} after ${this.retrySeconds} seconds):`,
          err
        );
        setTimeout(this.connectWithRetry, this.retrySeconds * 1000);
      });
  };
}

export default new MongooseService();
