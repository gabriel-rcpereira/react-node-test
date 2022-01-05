import Express from "express";
import IFindAllUsers from "../../../../core/usecases/find-all-users.interface";
import GetAllUsers from "./get-all-users";

class UserRouter {
  constructor(
    private readonly app: Express.Application,
    private readonly findAllUsers: IFindAllUsers
  ) {
    this.route();
  }

  private route = () => {
    this.app.get("/api/v1/users", new GetAllUsers(this.findAllUsers).execute);
  };
}

export default UserRouter;
