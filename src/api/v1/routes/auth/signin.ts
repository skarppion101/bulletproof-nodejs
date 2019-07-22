import Joi from "@hapi/joi";
import {ICommonResponse} from "../../../../types/api-doc";
import {ISignInUserInput} from "../../../../interfaces/IUser";

export const validationScheme = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
});

export interface ISignInResponse extends ICommonResponse {
  token?: string;
}

export function signInCtr(user: ISignInUserInput): ISignInResponse {
  const result = validationScheme.validate(user);
  if (result.error) throw result.error;

  return {ok: true};
}
