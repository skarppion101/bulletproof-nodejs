import {expressLoaders} from "./express/express";
import {Application} from "express";
import {loadAPIV1} from "../api/v1";
import {loadCommonAPI} from "../api";
import {globalErrorHandler, notFoundErrorHandler} from "./express/error-handler";

export function initLoaders(app: Application) {
  // Load express plugins
  expressLoaders(app);

  // Load API routes
  loadCommonAPI(app);
  loadAPIV1(app);

  // Load error handlers
  app.use(notFoundErrorHandler);
  app.use(globalErrorHandler);

  app.ctx.logger.info("✌️ Express loaded");
}
