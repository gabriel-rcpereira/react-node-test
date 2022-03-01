import * as yup from 'yup';

interface IUser {
  firstName: string;
  surname: string;
  birthdate: Date;
  country: string;
  id?: string;
}

class User {
  public firstName: string;

  public surname: string;

  public birthdate: Date;

  public country: string;

  public id?: string;

  private validationSchema: yup.SchemaOf<IUser>;

  constructor(private readonly user: IUser) {
    this.firstName = user.firstName;
    this.surname = user.surname;
    this.birthdate = user.birthdate;
    this.country = user.country;
    this.id = user.id;

    this.validationSchema = yup.object({
      firstName: yup.string().max(100)
        .required(),
      surname: yup.string().max(150)
        .required(),
      birthdate: yup.date()
        .required(),
      country: yup.string().max(100)
        .required(),
      id: yup.string()
        .notRequired()
    });
  }

  public validateNewUser = async (): Promise<void> => {
    await this.validationSchema.validate(this);
  };
}

export default User;
