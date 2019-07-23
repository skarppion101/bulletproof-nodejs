import {Application} from "express";
import {Auth} from "./auth";
import {IAuth} from "../interfaces/IAuth";
import {IEnv} from "../env";

export interface IServices {
  auth: IAuth;
}

export function initServices(app: Application, env: IEnv): IServices {
  return {
    auth: new Auth(app, env),
  };
}
