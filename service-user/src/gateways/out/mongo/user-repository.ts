import { Model } from "mongoose";
import User from "../../../core/domains/user";
import IUserManagerAdapter from "../../../core/outbound/user-manager-adapter.interface";
import IUserDocument from "../../../infrastructure/database/user-document.interface";

class UserRepository implements IUserManagerAdapter {
  constructor(private readonly userDocument: Model<IUserDocument>) {

  }

  public findAll = async (): Promise<User[]> => (await this.userDocument.find().exec())
    .map((user) => ({
      id: user._id,
      firstName: user.firstName,
      surname: user.surname,
      birthdate: user.birthdate,
      country: user.country
    }));
}

export default UserRepository;
