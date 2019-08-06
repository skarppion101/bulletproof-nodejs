import {ISignUpUserInput, IUserRecord} from "./IUser";

interface IAuthResponse {
  user?: IUserRecord;
  token?: string;
}

export interface IAuth {
  signIn(email: string, password: string): Promise<IAuthResponse>;

  signUp(user: ISignUpUserInput): Promise<IAuthResponse>;
}
