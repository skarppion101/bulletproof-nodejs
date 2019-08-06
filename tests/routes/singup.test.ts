import {LocalAuth} from "../../src/services/auth/local-auth";
import {mockBaseCtx, mockUserInvalid, mockUserValid} from "../test_utils";
import {signUpCtr} from "../../src/api/v1/routes/auth/signup";
import {createDB} from "../../src/services/db";

const db = createDB(mockBaseCtx);
const auth = new LocalAuth(mockBaseCtx, db);

let transaction: any;
describe("Signup in route test", () => {
  beforeAll(() => {
    return db.transaction(t => {
      transaction = t;
      return Promise.resolve();
    });
  });

  it("should fail to create a new user", async () => {
    const {ok, errors} = await signUpCtr(auth, mockUserInvalid);
    expect(ok).toBeFalsy();
    expect(errors.length).toEqual(1);
  });

  it("should create a new user", async () => {
    const {ok, errors} = await signUpCtr(auth, mockUserValid);
    expect(ok).toBeTruthy();
    expect(errors.length).toEqual(0);
  });

  afterAll(() => {
    return transaction.revert();
  });
});
