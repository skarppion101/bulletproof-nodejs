import {loadEnvVariables} from "./config/config";
import express from "express";
import Logger from "./loaders/logger";
import {addLoaders} from "./loaders/loaders";

const app = express();
const env = loadEnvVariables();

addLoaders(app);

app.listen(env.PORT, (err: Error) => {
  if (err) {
    Logger.error(err);
    process.exit(1);
    return;
  }
  Logger.info(`
    ################################################
    🛡️  Server listening on port: ${env.PORT} 🛡️ 
    ################################################
  `);
});
