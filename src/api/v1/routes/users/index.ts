import {Router} from "express";
import RestypedRouter from "restyped-express-async-middleware";
import {APIV1Doc} from "../../../../types/api-v1-doc";
import {meCtr} from "./me";
import {isAuth} from "../../../middlewares/isAuth";

export const USERS_ME = "/users/me";

export function usersRouter(parentRouter: Router) {
  const router = RestypedRouter<APIV1Doc>(parentRouter);
  router.get(USERS_ME, async req => meCtr(req.token), isAuth);
}
