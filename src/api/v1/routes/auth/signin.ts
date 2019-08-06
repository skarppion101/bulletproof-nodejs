import Joi, {ValidationError} from "@hapi/joi";
import {ICommonResponse} from "../../../../types/api-doc";
import {ISignInUserInput} from "../../../../interfaces/IUser";
import {IAuth} from "../../../../interfaces/IAuth";

export const validationScheme = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
});

export interface ISignInResponse extends ICommonResponse {
  errors: Array<ValidationError>;
  token?: string;
}

export async function signInCtr(auth: IAuth, user: ISignInUserInput): Promise<ISignInResponse> {
  const result = validationScheme.validate(user);
  if (result.error) return {ok: false, errors: [result.error]};

  return auth
    .signIn(user.email, user.password)
    .then(({token}) => {
      return {ok: true, errors: [], token};
    })
    .catch(err => {
      return {ok: false, errors: [err]};
    });
}
