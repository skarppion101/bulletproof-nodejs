import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({modelName: "users"})
export class UserModel extends Model<UserModel> {
  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.STRING)
  salt!: string;

  @Column(DataType.STRING)
  username!: string;
}
