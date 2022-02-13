import { NextFunction, Request, Response } from 'express';
import ResourceAlreadyCreatedException from '../../../../core/exceptions/resource-already-created';

interface IErrorDetail {
  error: string;
}

class ApiErrorHandler {
  public execute = (
    error: Error,
    _req: Request,
    res: Response<IErrorDetail>,
    next: NextFunction
  ): void => {
    if (error instanceof ResourceAlreadyCreatedException) {
      res.status(409).send({ error: error.message });
    }

    next();
  };
}

export default ApiErrorHandler;
