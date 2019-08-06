import {IEnv} from "../src/env";
import {ISignUpUserInput} from "../src/interfaces/IUser";
import {IBaseContext} from "../src/interfaces/IContext";
import {defaultLogger} from "../src/utils/logger";

interface IEnvTest extends IEnv {
  SQLITE_STORAGE: string;
}

export const mockEnv: IEnvTest = {
  DB_HOST: "",
  DB_NAME: "",
  DB_PASSWORD: "",
  DB_USERNAME: "",
  SQLITE_STORAGE: "db.sqlite",
  IS_PRODUCTION: false,
  JWT_SECRET: "secret",
  PORT: 3000,
};

export const mockUserInvalid: ISignUpUserInput = {
  email: "invalid",
  password: "invalid",
  username: "invalid",
};

export const mockUserValid: ISignUpUserInput = {
  email: "test1@google.com",
  password: "password1",
  username: "username1",
};

export const mockBaseCtx: IBaseContext = {
  logger: defaultLogger,
  env: mockEnv,
};
