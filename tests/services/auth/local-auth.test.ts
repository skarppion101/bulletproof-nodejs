import {mockBaseCtx, mockEnv, mockUserValid} from "../../test_utils";
import {createDB} from "../../../src/services/db";
import {LocalAuth} from "../../../src/services/auth/local-auth";
import {initModels} from "../../../src/models";
import {Transaction} from "sequelize";

const db = createDB(mockBaseCtx);
let t: Transaction;

describe("Local auth service test", () => {
  // TODO: fix transaction
  beforeAll(() => {
    return initModels(db, mockEnv).then(db => {
      return db.transaction().then(_t => {
        t = _t;
      });
    });
  });

  it("should create a user with valid token", () => {
    const auth = new LocalAuth(mockBaseCtx, db);
    return auth
      .signUp(mockUserValid)
      .then(res => {
        expect(res.user.email).toBe(mockUserValid.email);
        return auth.signIn(mockUserValid.email, mockUserValid.password);
      })
      .then(res => {
        expect(res.user.password).not.toBe(mockUserValid.password);
      });
  });

  afterAll(() => {
    t.rollback();
  });
});
