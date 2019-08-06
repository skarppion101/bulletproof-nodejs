import {Sequelize} from "sequelize-typescript";
import {mockEnv} from "../../tests/test_utils";
import path from "path";
import {IBaseContext} from "../interfaces/IContext";
import {UserModel} from "../models/user.model";
import {ROOT} from "../../config";
import {createNamespace} from "continuation-local-storage";

export async function initDBConnection(ctx: IBaseContext): Promise<Sequelize> {
  const db = createDB(ctx);

  return db.authenticate().then(() => db);
}

export function createDB(ctx: IBaseContext): Sequelize {
  const {env} = ctx;
  const storage = path.join(ROOT, "./tests", mockEnv.SQLITE_STORAGE);
  const namespace = createNamespace("test");
  Sequelize.useCLS(namespace);

  // @ts-ignore
  const sequelize = new Sequelize({
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    // eslint-disable-next-line no-console
    logging: console.log,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT ? env.DB_DIALECT : "sqlite",
    storage,
  });
  sequelize.addModels([UserModel]);
  return sequelize;
}
