import Sequelize, {Model} from "sequelize";

export class UserModel extends Model {
  username = Sequelize.STRING;
}
