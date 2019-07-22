import {ICommonResponse} from "../../types/api-doc";

export const STATUS = "/status";

export function statusCtr(): ICommonResponse {
  return {ok: true, serverTime: 123};
}
