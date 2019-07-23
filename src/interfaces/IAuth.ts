import {IUserRecord} from "./IUser";

export interface IAuth {
  signIn(email: string, password: string): Promise<{user: IUserRecord; token: string}>;
}

// export abstract class IAuth {
//   abstract signIn(email: string, password: string): Promise<{user: IUserRecord; token: string}>;
// }
