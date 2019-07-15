import {celebrate, Joi} from "celebrate";
import {NextFunction, Request, Response} from "express";

const scheme = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const signUpValidator = celebrate(scheme);

// auth.post("/signup", celebrate(scheme), function(req, res, next) {
//   const {logger} = req.app.ctx;
//   logger.debug("Calling Sign-Up endpoint with body: %o", req.body);
//   res.status(201).json({ok: true});
//   // try {
//   //   const {user, token} = authService.SignUp(req.body as IUserInputDTO);
//   //   return res.status(201).json({user, token});
//   // } catch (e) {
//   //   logger.error("🔥 error: %o", e);
//   //   return next(e);
//   // }
// });

export function signUpCtr(req: Request, res: Response, next: NextFunction) {
  const {logger} = req.app.ctx;
  logger.debug("Calling Sign-Up endpoint with body: %o", req.body);
  res.status(201).json({ok: true});
  // try {
  //   const {user, token} = authService.SignUp(req.body as IUserInputDTO);
  //   return res.status(201).json({user, token});
  // } catch (e) {
  //   logger.error("🔥 error: %o", e);
  //   return next(e);
  // }
}
