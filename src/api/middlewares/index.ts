import {IEnv} from "../../env";
import {initAuthMiddleware} from "./isAuth";

export function initMiddlewares(env: IEnv) {
  initAuthMiddleware(env);
}
