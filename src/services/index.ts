import {Application} from "express";
import {AuthService} from "./auth";
import {IAuth} from "../interfaces/IAuth";
import {Env} from "../env";

export interface IServices {
  auth: IAuth;
}

export function initServices(app: Application, env: Env): IServices {
  return {
    auth: new AuthService(app, env),
  };
}
