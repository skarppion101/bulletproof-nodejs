import {Router, Response, Request} from "express";
import {apiV1} from "./v1";
import {ExpressError} from "../types/express/error";
import {Errors} from "../enum/errors";

export const api = Router();

api.use("/v1", apiV1);

// Catch 404 and forward to error handler
apiV1.use((req, res, next) => {
  const err = new ExpressError({
    name: Errors.NotFound,
    message: "Page Not Found",
    status: 404,
  });
  next(err);
});

// Error handlers
apiV1.use(function(err: ExpressError, req: Request, res: Response) {
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
});
