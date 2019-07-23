import {Application} from "express";
import {IEnv} from "../env";
import {IErrorReporter, ISystemError} from "../interfaces/IErrorReporter";
import {ICommonResponse} from "../types/api-doc";

export class ErrorReporter implements IErrorReporter {
  private app: Application;
  private env: IEnv;

  constructor(app: Application, env: IEnv) {
    this.app = app;
    this.env = env;
  }

  async report(err: ISystemError): Promise<ICommonResponse> {
    return {ok: true};
  }
}
