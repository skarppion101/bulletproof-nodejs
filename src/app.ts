import {loadEnvVariables} from "./env";
import express from "express";
import {createLogger} from "./services/logger";
import {addLoaders} from "./loaders/loaders";

const app = express();
const env = loadEnvVariables();
const logger = createLogger(env);

app.ctx = {
  env: env,
  logger: logger,
};
addLoaders(app);

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
