import {Application} from "express";
import RestypedRouter from "restyped-express-async";
import {APIDoc} from "../types/api-doc";
import {STATUS, statusCtr} from "./routes/status";

export function loadCommonAPI(app: Application) {
  const router = RestypedRouter<APIDoc>(app);

  router.get(STATUS, async () => statusCtr());
  router.head(STATUS, async () => statusCtr());
}
