import Joi from "@hapi/joi";
import {Request} from "express";

const scheme = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export function signInCtr(req: Request) {
  const {logger} = req.app.ctx;
  logger.debug(`Calling ${req.url} endpoint with body: %o`, req.body);
  // res.status(200).json({ok: true});
  return new Promise((resolve, reject) => resolve({success: true}));
}
