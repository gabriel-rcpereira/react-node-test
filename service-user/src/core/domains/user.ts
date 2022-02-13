class User {
  constructor(
    public firstName: string,
    public surname: string,
    public birthdate: Date,
    public country: string,
    public id?: string
  ) {

  }
}

export default User;
