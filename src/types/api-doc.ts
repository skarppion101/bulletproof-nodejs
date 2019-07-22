import {STATUS} from "../api/routes/status";

export interface IServerStatus {
  ok: boolean;
  serverTime: number;
}

export interface APIDoc {
  [STATUS]: {
    GET: {
      response: IServerStatus;
    };
    HEAD: {
      response: IServerStatus;
    };
  };
}
