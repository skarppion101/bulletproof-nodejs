import {expressLoaders} from "./express/express";
import {Application} from "express";
import {apiV1} from "../api/v1";
import {healthCheck} from "../api/health-check";

export function addLoaders(app: Application) {
  // Load express plugins
  expressLoaders(app);
  healthCheck(app);

  // Load API routes
  app.use("/api", apiV1);

  app.ctx.logger.info("✌️ Express loaded");
}
