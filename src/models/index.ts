import {Sequelize} from "sequelize-typescript";
import {IEnv} from "../env";

export function initModels(db: Sequelize, env: IEnv): Promise<Sequelize> {
  return db.sync({force: false});
}
