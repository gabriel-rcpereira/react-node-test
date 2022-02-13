import { Model } from 'mongoose';
import mongooseService from './mongoose-service';
import IUserDocument from './user-document.interface';

interface IDocument {
  UserDocument: Model<IUserDocument>;
}

class MongoSchema {
  private readonly Schema = mongooseService.getMongoose().Schema;

  private readonly UserDocument: Model<IUserDocument>;

  constructor() {
    this.UserDocument = this.createUserDocument();
  }

  public get document(): IDocument {
    return {
      UserDocument: this.UserDocument
    };
  }

  private createUserDocument = () => {
    const userSchema = this.createUserSchema();
    return mongooseService.getMongoose().model('user', userSchema);
  };

  private createUserSchema = () => new this.Schema({
    _id: String,
    firstName: String,
    surname: String,
    birthdate: Date,
    country: String
  });
}

export default MongoSchema;
