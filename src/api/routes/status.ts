import {IServerStatus} from "../../types/api-doc";

export const STATUS = "/status";

export function statusCtr(): IServerStatus {
  return {ok: true, serverTime: 123};
}
