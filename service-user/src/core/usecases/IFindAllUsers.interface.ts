import User from "../domains/User";

interface IFindAllUsers {
  execute: () => User[];
}

export default IFindAllUsers;
