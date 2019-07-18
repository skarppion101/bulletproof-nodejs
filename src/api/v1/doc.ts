import {AUTH_SIGN_IN, AUTH_SIGN_UP} from "./routes/auth";
import {IUserInputDTO} from "../../interfaces/IUser";
import {ISignUpResponse} from "./routes/auth/signup";
import {STATUS} from "../routes";

export interface APIDoc {
  [STATUS]: {
    GET: {
      response: {
        ok: boolean;
      };
    };
    HEAD: {
      response: {
        ok: boolean;
      };
    };
  };

  [AUTH_SIGN_UP]: {
    POST: {
      params: {};
      query: {};
      body: IUserInputDTO;
      response: ISignUpResponse;
    };
  };

  [AUTH_SIGN_IN]: {
    POST: {
      params: {};
      query: {};
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
