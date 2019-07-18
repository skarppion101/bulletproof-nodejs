import {IUser} from "../../interfaces/IUser";
import {IEnv} from "../../env";
import {Logger} from "winston";

interface Context {
  env: IEnv;
  logger: Logger;
}

declare global {
  namespace Express {
    export interface Application {
      ctx: Context;
    }
    export interface Request extends Request {
      currentUser: IUser;
    }
  }
}
