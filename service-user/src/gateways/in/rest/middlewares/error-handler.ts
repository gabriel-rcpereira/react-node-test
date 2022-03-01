import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import ResourceAlreadyCreatedException from '../../../../core/exceptions/resource-already-created';

interface IErrorDetail {
  errors: string[];
}

class ApiErrorHandler {
  public execute = (
    error: Error,
    _req: Request,
    res: Response<IErrorDetail>,
    next: NextFunction
  ): void => {
    if (error instanceof ResourceAlreadyCreatedException) {
      res.status(409).send({ errors: [error.message] });
    }

    if (error instanceof ValidationError) {
      const errors = error.errors.map((s) => s.split('\n')).flatMap((s) => s);
      res.status(400).send({ errors });
    }

    next();
  };
}

export default ApiErrorHandler;
