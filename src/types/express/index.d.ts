import {IAppContext} from "../../interfaces/IContext";

declare global {
  namespace Express {
    export interface Application {
      ctx: IAppContext;
    }

    export interface Request {
      token: string;
    }
  }
}
