import {expressLoaders} from "./express/express";
import Logger from "./logger";
import {Application} from "express";
import {api} from "../api/api";
import {healthCheckStatus} from "../api/healthCheck";

export function addLoaders(app: Application) {
  // Load express plugins
  expressLoaders(app);
  healthCheckStatus(app);

  // Load API routes
  app.use("/api", api);

  Logger.info("✌️ Express loaded");
}
