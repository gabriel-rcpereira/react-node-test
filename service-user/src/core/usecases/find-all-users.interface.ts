import User from "../domains/user";

interface IFindAllUsers {
  execute: () => Promise<User[]>;
}

export default IFindAllUsers;
