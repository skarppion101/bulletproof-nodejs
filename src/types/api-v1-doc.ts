import {AUTH_SIGN_IN, AUTH_SIGN_UP} from "../api/v1/routes/auth";
import {IUserInputDTO} from "../interfaces/IUser";
import {ISignUpResponse} from "../api/v1/routes/auth/signup";
import {INFO} from "../api/v1/routes/info";

export interface APIV1Doc {
  [INFO]: {
    GET: {
      response: {
        ok: boolean;
      };
    };
  };

  [AUTH_SIGN_UP]: {
    POST: {
      body: IUserInputDTO;
      response: ISignUpResponse;
    };
  };

  [AUTH_SIGN_IN]: {
    POST: {
      body: IUserInputDTO;
      response: {
        success: boolean;
        smth: string;
        id?: string;
      };
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
