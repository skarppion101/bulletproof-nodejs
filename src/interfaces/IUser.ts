export interface IUserInputDTO {
  username: string;
  email: string;
  password: string;
}

export interface IUser extends IUserInputDTO {
  _id: string;
  salt: string;
}
