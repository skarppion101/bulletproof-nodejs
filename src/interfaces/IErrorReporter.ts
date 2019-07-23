import {ICommonResponse} from "../types/api-doc";

export interface ISystemError {
  error: string;
}

export interface IErrorReporter {
  report(err: ISystemError): Promise<ICommonResponse>;
}
