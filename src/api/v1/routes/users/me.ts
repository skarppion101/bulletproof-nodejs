// import {Router, Request, Response} from "express";
// import middlewares from "../../middlewares";
// const route = Router();
//
// export default (app: Router) => {
//   app.use("/users", route);
//
//   route.get("/me", middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
//     return res.json({user: req.currentUser}).status(200);
//   });
// };

import {ICommonResponse} from "../../../../types/api-doc";

export interface ISignInResponse extends ICommonResponse {
  token?: string;
}

export function meCtr(req): ISignInResponse {
  return {ok: true};
}
