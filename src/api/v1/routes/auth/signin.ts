import {celebrate, Joi} from "celebrate";
import {NextFunction, Request, Response} from "express";

const scheme = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const signInValidator = celebrate(scheme);

export function signInCtr(req: Request) {
  const {logger} = req.app.ctx;
  logger.debug(`Calling ${req.url} endpoint with body: %o`, req.body);
  // res.status(200).json({ok: true});
  return new Promise((resolve, reject) => resolve({success: true}));

  // try {
  //   const {user, token} = authService.SignUp(req.body as IUserInputDTO);
  //   return res.status(201).json({user, token});
  // } catch (e) {
  //   logger.error("🔥 error: %o", e);
  //   return next(e);
  // }
}
