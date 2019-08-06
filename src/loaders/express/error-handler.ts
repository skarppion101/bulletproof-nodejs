import {NextFunction, Request, Response} from "express";
import {ExpressError} from "../../types/express/error";
import {Errors} from "../../enum/errors";

// Catch 404 and forward to error handler
export function notFoundErrorHandler(req: Request, res: Response, next: NextFunction) {
  const err = new ExpressError({
    name: Errors.NotFound,
    message: "Page Not Found",
    status: 404,
  });
  next(err);
}

// Global error handlers
export function globalErrorHandler(err: ExpressError, req: Request, res: Response) {
  switch (err.name) {
    case Errors.NotFound:
      return res
        .status(err.status)
        .send({message: err.message})
        .end();
    case Errors.UnauthorizedError:
      return res
        .status(err.status)
        .send({message: err.message})
        .end();
    default:
      return res
        .status(err.status || 500)
        .send({message: err.message})
        .end();
  }
}
