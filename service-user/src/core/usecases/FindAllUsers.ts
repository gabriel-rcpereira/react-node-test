import User from "../domains/User";
import IUserManagerAdapter from "../outbound/IUserManagerAdapter.interface";
import IFindAllUsers from "./IFindAllUsers.interface";

class FindAllUsers implements IFindAllUsers {
  constructor(private readonly userManagerAdapter: IUserManagerAdapter) {

  }

  public execute = (): User[] => this.userManagerAdapter.findAll();
}

export default FindAllUsers;
