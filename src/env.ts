import {config} from "dotenv";
import path from "path";
import {ENV_VARIABLES} from "./enum/environments";

process.env.NODE_ENV = process.env.NODE_ENV || ENV_VARIABLES.DEVELOPMENT;

export interface IEnv {
  PORT: number;
  IS_PRODUCTION: boolean;
  JWT_SECRET: string;
}

class Env implements IEnv {
  PORT: number;
  IS_PRODUCTION: boolean;
  JWT_SECRET: string;

  constructor(env: NodeJS.ProcessEnv) {
    if (!env.PORT) {
      throw new Error("Application port is not defined");
    }
    if (!env.JWT_SECRET) {
      throw new Error("JWT secret is not defined");
    }
    this.PORT = parseInt(env.PORT, 10);
    this.IS_PRODUCTION = env.NODE_ENV === ENV_VARIABLES.PRODUCTION;
    this.JWT_SECRET = env.JWT_SECRET;
  }
}

export function loadEnvVariables(): IEnv {
  if (process.env.NODE_ENV === ENV_VARIABLES.DEVELOPMENT) {
    const envFound = config({path: path.join(__dirname, "../../.env")});
    if (envFound.error) throw envFound.error;
  }
  return new Env(process.env);
}
