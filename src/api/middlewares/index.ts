import {initAuthMiddleware} from "./isAuth";
import {Application} from "express";

export function initMiddlewares(app: Application) {
  initAuthMiddleware(app.ctx);
}
