import {Env} from "../../env";
import {initAuthMiddleware} from "./isAuth";

export function initMiddlewares(env: Env) {
  initAuthMiddleware(env);
}
