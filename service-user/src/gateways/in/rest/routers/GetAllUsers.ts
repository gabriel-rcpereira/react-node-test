import { Request, Response } from "express";
import User from "../../../../core/domains/User";
import IFindAllUsers from "../../../../core/usecases/IFindAllUsers.interface";
import IUserResponse from "../models/responses/IUserResponse.interface";

class GetAllUsers {
  constructor(private readonly findAllUsers: IFindAllUsers) {

  }

  public execute = (req: Request, res: Response<IUserResponse[]>): void => {
    const users = this.findAllUsers.execute();
    const usersResponse = this.mapToUsersResponse(users);
    res.status(200).send(usersResponse);
  };

  private mapToUsersResponse = (users: User[]): IUserResponse[] => users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    surname: user.surname,
    birthdate: user.birthdate,
    country: user.country
  }));
}

export default GetAllUsers;
