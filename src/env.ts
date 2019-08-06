import {config} from "dotenv";
import path from "path";
import {ENV_VARIABLES} from "./enum/environments";

process.env.NODE_ENV = process.env.NODE_ENV || ENV_VARIABLES.DEVELOPMENT;

export interface IEnv {
  PORT: number;
  IS_PRODUCTION: boolean;
  JWT_SECRET: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DIALECT?: string;
}

class Env implements IEnv {
  PORT: number;
  IS_PRODUCTION: boolean;
  JWT_SECRET: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DIALECT?: string;

  constructor(env: NodeJS.ProcessEnv) {
    if (!env.PORT) {
      throw new Error("Application port is not defined");
    }
    if (!env.JWT_SECRET) {
      throw new Error("JWT secret is not defined");
    }
    if (!env.DB_HOST) {
      throw new Error("Database host is not defined");
    }
    if (!env.DB_NAME) {
      throw new Error("Database name is not defined");
    }
    if (!env.DB_USERNAME || !env.DB_PASSWORD) {
      throw new Error("Database username and password are not defined");
    }
    this.PORT = parseInt(env.PORT, 10);
    this.IS_PRODUCTION = env.NODE_ENV === ENV_VARIABLES.PRODUCTION;
    this.JWT_SECRET = env.JWT_SECRET;
    this.DB_HOST = env.DB_HOST;
    this.DB_NAME = env.DB_NAME;
    this.DB_USERNAME = env.DB_USERNAME;
    this.DB_PASSWORD = env.DB_PASSWORD;
    this.DB_PASSWORD = env.DB_PASSWORD;
    this.DB_DIALECT = env.DB_DIALECT;
  }
}

export function initEnvVariables(): IEnv {
  if (process.env.NODE_ENV === ENV_VARIABLES.DEVELOPMENT) {
    const envFound = config({path: path.join(__dirname, "../../.env")});
    if (envFound.error) throw envFound.error;
  }
  return new Env(process.env);
}
