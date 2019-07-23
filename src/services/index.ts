import {Application} from "express";
import {Auth} from "./auth";
import {IAuth} from "../interfaces/IAuth";
import {IEnv} from "../env";
import {IErrorReporter} from "../interfaces/IErrorReporter";
import {IMailer} from "../interfaces/IMailer";
import {ErrorReporter} from "./error-reporter";
import {Mailer} from "./mailer";

export interface IServices {
  auth: IAuth;
  errorReporter: IErrorReporter;
  mailer: IMailer;
}

export function initServices(app: Application, env: IEnv): IServices {
  return {
    errorReporter: new ErrorReporter(app, env),
    mailer: new Mailer(app, env),
    auth: new Auth(app, env),
  };
}
