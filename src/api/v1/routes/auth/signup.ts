import Joi from "@hapi/joi";
import {IUserInputDTO} from "../../../../interfaces/IUser";

export const validationScheme = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export interface ISignUpResponse {
  success: boolean;
  id?: string;
  token?: string;
}

function getUserMock() {
  return {
    success: true,
    token: "sdas",
  };
}

export function signUpCtr(user: IUserInputDTO) {
  return validationScheme
    .validate(user)
    .then(getUserMock);
}
