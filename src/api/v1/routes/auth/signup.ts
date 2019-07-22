import Joi from "@hapi/joi";
import {ISignUpUserInput} from "../../../../interfaces/IUser";
import {ICommonResponse} from "../../../../types/api-doc";

export const validationScheme = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export interface ISignUpResponse extends ICommonResponse {
  token?: string;
}

export function signUpCtr(user: ISignUpUserInput): ISignUpResponse {
  const result = validationScheme.validate(user);
  if (result.error) throw result.error;

  return {ok: true};
}
