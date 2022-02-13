import Express from 'express';
import ICreateUser from '../../../../core/usecases/create-user.interface';
import IFindAllUsers from '../../../../core/usecases/find-all-users.interface';
import GetAllUsers from './get-all-users';
import PostUser from './post-user';

class UserRouter {
  constructor(
    private readonly app: Express.Application,
    private readonly findAllUsers: IFindAllUsers,
    private readonly createUser: ICreateUser
  ) {
    this.route();
  }

  private route = () => {
    this.app.get('/api/v1/users', new GetAllUsers(this.findAllUsers).execute);
    this.app.post('/api/v1/users', new PostUser(this.createUser).execute);
  };
}

export default UserRouter;
