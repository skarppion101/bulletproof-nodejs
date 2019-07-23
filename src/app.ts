import {loadEnvVariables} from "./env";
import express from "express";
import {createLogger} from "./utils/logger";
import {initLoaders} from "./loaders";
import {initMiddlewares} from "./api/middlewares";
import {initServices} from "./services";

const app = express();
const env = loadEnvVariables();
const logger = createLogger(env);

app.ctx = {
  env,
  logger,
  services: initServices(app, env),
};
initMiddlewares(env);
initLoaders(app);

app.listen(env.PORT, (err: Error) => {
  if (err) {
    app.ctx.logger.error(err);
    process.exit(1);
    return;
  }
  app.ctx.logger.info(`
    ################################################
    🛡️  Server listening on port: ${env.PORT} 🛡️ 
    ################################################
  `);
});
