import User from '../../domains/user';
import ResourceAlreadyCreatedException from '../../exceptions/resource-already-created';
import IUserManagerAdapter from '../../outbound/user-manager-adapter.interface';
import ICreateUser from '../create-user.interface';

class CreateUser implements ICreateUser {
  constructor(private readonly userManagerAdapter: IUserManagerAdapter) {

  }

  public execute = async (newUser: User): Promise<User> => {
    await newUser.validateNewUser();

    const foundUser = await this.userManagerAdapter.retrieveUserByNameAndBirthdate(
      newUser.firstName,
      newUser.surname,
      newUser.birthdate
    );

    if (foundUser) {
      throw new ResourceAlreadyCreatedException('User already created.');
    }

    return this.userManagerAdapter.create(newUser);
  };
}

export default CreateUser;
