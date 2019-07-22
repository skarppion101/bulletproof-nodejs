import {AUTH_SIGN_IN, AUTH_SIGN_UP} from "../api/v1/routes/auth";
import {ISignInUserInput, ISignUpUserInput, IUserRecord, IUserWithToken} from "../interfaces/IUser";
import {ISignUpResponse} from "../api/v1/routes/auth/signup";
import {INFO} from "../api/v1/routes/info";
import {ICommonResponse} from "./api-doc";
import {ISignInResponse} from "../api/v1/routes/auth/signin";
import {USERS_ME} from "../api/v1/routes/users";

export interface APIV1Doc {
  [INFO]: {
    GET: {
      response: ICommonResponse;
    };
  };

  [AUTH_SIGN_UP]: {
    POST: {
      body: ISignUpUserInput;
      response: ISignUpResponse;
    };
  };

  [AUTH_SIGN_IN]: {
    POST: {
      body: ISignInUserInput;
      response: ISignInResponse;
    };
  };

  [USERS_ME]: {
    GET: {
      head: IUserWithToken;
      response: IUserRecord;
    };
  };

  // "/auth/sign-in": {
  //   // Route name (without prefix, if you have one)
  //   POST: {
  //     // Any valid HTTP method
  //     query: {
  //       // Query string params (e.g. /me?includeProfilePics=true)
  //       includeProfilePics?: boolean;
  //     };
  //     // response: User[]; // JSON response
  //   };
  // };

  // "/user/:id/send-message": {
  //   POST: {
  //     params: {
  //       // Inline route params
  //       id: string;
  //     };
  //     body: {
  //       // JSON request body
  //       message: string;
  //     };
  //     response: {
  //       // JSON response
  //       success: boolean;
  //     };
  //   };
  // };
}
