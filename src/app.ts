import {initEnvVariables} from "./env";
import express from "express";
import {initLogger} from "./utils/logger";
import {initLoaders} from "./loaders";
import {initMiddlewares} from "./api/middlewares";
import {initServices} from "./services";
import {initSocket} from "./socket";
import {initModels} from "./models";
import {initDBConnection} from "./services/db";
import {IBaseContext} from "./interfaces/IContext";

const app = express();
const env = initEnvVariables();
const logger = initLogger(env);
const baseCtx: IBaseContext = {
  env,
  logger,
};

initDBConnection(baseCtx)
  .then(db => initModels(db, env))
  .then(db => initServices(baseCtx, db))
  .then(services => {
    app.ctx = {
      env,
      logger,
      services,
      db: services.db,
    };
    initMiddlewares(app);
    initLoaders(app);

    const server = app.listen(env.PORT, (err: Error) => {
      if (err) {
        app.ctx.logger.error(err);
        process.exit(1);
        return;
      }
      app.ctx.logger.info(`Server listening on port: ${env.PORT}`);
    });

    initSocket(server);
  })
  .catch(err => {
    logger.error(err);
    process.exit(1);
  });
