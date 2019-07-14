import {Router} from "express";
import auth from "./routes/auth";

export const api = Router();

api.use("/auth", auth);
auth(api);

// catch 404 and forward to error handler
api.use((req, res, next) => {
  const err = new Error("Not Found");
  err["status"] = 404;
  next(err);
});

// Error handlers
api.use((err, req, res, next) => {
  /**
   * Handle 401 thrown by express-jwt library
   */
  if (err.name === "UnauthorizedError") {
    return res
      .status(err.status)
      .send({message: err.message})
      .end();
  }
  return next(err);
});
api.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
  });
});
