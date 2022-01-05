import { Model } from "mongoose";
import mongooseService from "./mongoose-service";
import IUserDocument from "./user-document.interface";

class MongoSchema {
  private readonly Schema = mongooseService.getMongoose().Schema;

  private readonly UserDocument: Model<IUserDocument>;

  constructor() {
    const userSchema = this.createSchemas();
    this.UserDocument = mongooseService.getMongoose().model("user", userSchema);
  }

  public get userDocument(): Model<IUserDocument> {
    return this.UserDocument;
  }

  private createSchemas = () => new this.Schema({
    _id: String,
    firstName: String,
    surname: String,
    birthdate: Date,
    country: String
  });
}

export default MongoSchema;
