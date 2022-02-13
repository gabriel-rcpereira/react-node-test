import User from '../domains/user';

interface IUserManagerAdapter {
  findAll: () => Promise<User[]>;
  create: (newUser: User) => Promise<User>;
  retrieveUserByNameAndBirthdate: (
    firstName: string,
    surname: string,
    date: Date) => Promise<User | null>;
}

export default IUserManagerAdapter;
