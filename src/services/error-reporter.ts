import {IErrorReporter, ISystemError} from "../interfaces/IErrorReporter";
import {ICommonResponse} from "../types/api-doc";
import {IBaseContext} from "../interfaces/IContext";

export class ErrorReporter implements IErrorReporter {
  private ctx: IBaseContext;

  constructor(ctx: IBaseContext) {
    this.ctx = ctx;
  }

  async report(err: ISystemError): Promise<ICommonResponse> {
    return {ok: true};
  }
}
