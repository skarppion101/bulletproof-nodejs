import {Application, Router} from "express";
import {authRouter} from "./routes/auth";

export function loadAPIV1(app: Application) {
  const apiV1 = Router();

  authRouter(apiV1);

  app.use("/api/v1", apiV1);
}
