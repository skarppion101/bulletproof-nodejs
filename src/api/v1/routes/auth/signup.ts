import {celebrate, Joi} from "celebrate";
import {NextFunction, Request, Response} from "express";
import {IUserInputDTO} from "../../../../interfaces/IUser";

const scheme = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const signUpValidator = celebrate(scheme);

export function signUpCtr(data: IUserInputDTO) {
  return new Promise(resolve => {
    resolve({});
  });
}
