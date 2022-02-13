import User from '../../domains/user';
import IUserManagerAdapter from '../../outbound/user-manager-adapter.interface';
import IFindAllUsers from '../find-all-users.interface';

class FindAllUsers implements IFindAllUsers {
  constructor(private readonly userManagerAdapter: IUserManagerAdapter) {

  }

  public execute = async (): Promise<User[]> => this.userManagerAdapter.findAll();
}

export default FindAllUsers;
