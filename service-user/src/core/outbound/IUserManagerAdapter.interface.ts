import User from "../domains/User";

interface IUserManagerAdapter {
  findAll: () => User[];
}

export default IUserManagerAdapter;
