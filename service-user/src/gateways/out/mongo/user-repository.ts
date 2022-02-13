import { Model } from 'mongoose';
import shortid from 'shortid';
import User from '../../../core/domains/user';
import IUserManagerAdapter from '../../../core/outbound/user-manager-adapter.interface';
import IUserDocument from '../../../infrastructure/database/user-document.interface';

class UserRepository implements IUserManagerAdapter {
  constructor(private readonly UserDocument: Model<IUserDocument>) {

  }

  public findAll = async (): Promise<User[]> => (await this.UserDocument.find().exec())
    .map((user) => (new User(
      user.firstName,
      user.surname,
      user.birthdate,
      user.country,
      user._id
    )));

  public create = async (newUser: User): Promise<User> => {
    const newUserDocument = await new this.UserDocument({
      firstName: newUser.firstName,
      surname: newUser.surname,
      birthdate: newUser.birthdate,
      country: newUser.country,
      _id: shortid.generate()
    }).save();

    return this.mapToUser(newUserDocument);
  };

  public retrieveUserByNameAndBirthdate = async (
    firstName: string,
    surname: string,
    birthdate: Date
  ): Promise<User|null> => {
    const foundUserDocument = await this.UserDocument.findOne()
      .where('firstName', firstName)
      .where('surname', surname)
      .where('birthdate', birthdate);

    return foundUserDocument && this.mapToUser(foundUserDocument);
  };

  private mapToUser = (userDocument: IUserDocument) => new User(
    userDocument.firstName,
    userDocument.surname,
    userDocument.birthdate,
    userDocument.country,
    userDocument._id
  );
}

export default UserRepository;
