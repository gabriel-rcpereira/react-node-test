import Express from "express";
import GetAllUsers from "./GetAllUsers";

class UserRouter {
  constructor(private readonly app: Express.Application) {
    this.route();
  }

  private route = () => {
    this.app.get("/api/v1/users", new GetAllUsers().execute);
  };
}

export default UserRouter;
