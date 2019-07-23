import winston, {Logger} from "winston";
import {IEnv} from "../env";

export function createLogger(env: IEnv): Logger {
  const transports = [];

  if (!env.IS_PRODUCTION) {
    transports.push(new winston.transports.Console());
  } else {
    transports.push(
      new winston.transports.Console({
        format: winston.format.combine(winston.format.cli(), winston.format.splat()),
      }),
    );
  }

  return winston.createLogger({
    level: env.IS_PRODUCTION ? "info" : "debug",
    levels: winston.config.npm.levels,
    format: winston.format.combine(
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.errors({stack: true}),
      winston.format.splat(),
      winston.format.json(),
    ),
    transports,
  });
}
