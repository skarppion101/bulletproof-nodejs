import config from "./config";
import express from "express";
import Logger from "./loaders/logger";
import {addLoaders} from "./loaders";

const app = express();

addLoaders(app);

app.listen(config.port, (err: Error) => {
  if (err) {
    Logger.error(err);
    process.exit(1);
    return;
  }
  Logger.info(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️ 
    ################################################
  `);
});
