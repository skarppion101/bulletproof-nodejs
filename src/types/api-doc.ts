import {STATUS} from "../api/routes/status";

export interface ICommonResponse {
  ok: boolean;
  serverTime?: number;
  description?: string;
}

export interface APIDoc {
  [STATUS]: {
    GET: {
      response: ICommonResponse;
    };
    HEAD: {
      response: ICommonResponse;
    };
  };
}
