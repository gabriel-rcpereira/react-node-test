import User from "../domains/user";

interface IUserManagerAdapter {
  findAll: () => Promise<User[]>;
}

export default IUserManagerAdapter;
