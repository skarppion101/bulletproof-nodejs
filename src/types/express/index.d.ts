import {IEnv} from "../../env";
import {Logger} from "winston";
import {IServices} from "../../services";

interface Context {
  env: IEnv;
  logger: Logger;
  services: IServices;
}

declare global {
  namespace Express {
    export interface Application {
      ctx: Context;
    }
    export interface Request {
      token: string;
    }
  }
}
