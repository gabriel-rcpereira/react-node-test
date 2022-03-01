import { NextFunction, Request, Response } from 'express';
import User from '../../../../core/domains/user';
import ICreateUser from '../../../../core/usecases/create-user.interface';

interface IUserRequest {
  firstName: string;
  surname: string;
  birthdate: Date;
  country: string;
}

class PostUser {
  constructor(private readonly createUser: ICreateUser) {

  }

  public execute = async (
    req: Request<IUserRequest>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const newUserRequest: IUserRequest = req.body;
    try {
      const newUser = this.mapToUser(newUserRequest);
      const createdUser = await this.createUser.execute(newUser);
      const header = { location: createdUser.id }; // TODO implement the location header
      res.header(header)
        .status(201)
        .send();
    } catch (error) {
      next(error);
    }
  };

  private mapToUser = (newUserRequest: IUserRequest): User => new User({
    firstName: newUserRequest.firstName,
    surname: newUserRequest.surname,
    birthdate: newUserRequest.birthdate,
    country: newUserRequest.country
  });
}

export default PostUser;
