export interface ISignInUserInput {
  email: string;
  password: string;
}

export interface ISignUpUserInput extends ISignInUserInput {
  username: string;
}

export interface IUserWithToken {
  token: string;
}

export interface IUserRecord extends ISignUpUserInput {
  id: number;
}
