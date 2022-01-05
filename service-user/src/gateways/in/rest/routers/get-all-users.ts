import { Request, Response } from "express";
import User from "../../../../core/domains/user";
import IFindAllUsers from "../../../../core/usecases/find-all-users.interface";
import IUserResponse from "../models/responses/user-response.interface";

class GetAllUsers {
  constructor(private readonly findAllUsers: IFindAllUsers) {

  }

  public execute = async (req: Request, res: Response<IUserResponse[]>): Promise<void> => {
    const users = await this.findAllUsers.execute();
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
