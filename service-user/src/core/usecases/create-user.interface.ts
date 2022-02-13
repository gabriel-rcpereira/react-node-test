import User from '../domains/user';

interface ICreateUser {
  execute: (newUser: User) => Promise<User>;
}

export default ICreateUser;
