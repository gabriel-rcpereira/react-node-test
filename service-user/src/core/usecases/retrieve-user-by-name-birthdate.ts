import User from '../domains/user';

interface IRetrieveUserByNameAndBirthdate {
  execute: (firstName: string, surname: string, birthdate: Date) => Promise<User>;
}

export default IRetrieveUserByNameAndBirthdate;
