import {Router} from "express";
// import AuthService from "../../../../services/auth";
// import middlewares from "../../middlewares";
import {signUpCtr} from "./signup";
// import {signInCtr} from "./signin";
import RestypedRouter from "restyped-express-async";
import {APIDoc} from "../../doc";

export const AUTH_SIGN_UP = "/auth/sign-up";
export const AUTH_SIGN_IN = "/auth/sign-in";

export const auth = RestypedRouter<APIDoc>(Router());

auth.post(AUTH_SIGN_UP, req => signUpCtr(req.body));

// auth.post("/sign-in", signInValidator, signInCtr);
// auth.post("/sign-up", signUpValidator, signUpCtr);

// auth.post(
//   "/signup",
//   celebrate({
//     body: Joi.object({
//       name: Joi.string().required(),
//       email: Joi.string().required(),
//       password: Joi.string().required(),
//     }),
//   }),
//   async (req: Request, res: Response, next: NextFunction) => {
//     const logger = Container.get("logger");
//     logger.debug("Calling Sign-Up endpoint with body: %o", req.body);
//     try {
//       const authServiceInstance = Container.get(AuthService);
//       const {user, token} = await authServiceInstance.SignUp(req.body as IUserInputDTO);
//       return res.status(201).json({user, token});
//     } catch (e) {
//       logger.error("🔥 error: %o", e);
//       return next(e);
//     }
//   },
// );

// auth.post(
//   "/signin",
//   celebrate({
//     body: Joi.object({
//       email: Joi.string().required(),
//       password: Joi.string().required(),
//     }),
//   }),
//   async (req: Request, res: Response, next: NextFunction) => {
//     const logger = Container.get("logger");
//     logger.debug("Calling Sign-In endpoint with body: %o", req.body);
//     try {
//       const {email, password} = req.body;
//       const authServiceInstance = Container.get(AuthService);
//       const {user, token} = await authServiceInstance.SignIn(email, password);
//       return res.json({user, token}).status(200);
//     } catch (e) {
//       logger.error("🔥 error: %o", e);
//       return next(e);
//     }
//   },
// );

// /**
//  * @TODO Let's leave this as a place holder for now
//  * The reason for a logout route could be deleting a 'push notification token'
//  * so the device stops receiving push notifications after logout.
//  *
//  * Another use case for advance/enterprise apps, you can store a record of the jwt token
//  * emitted for the session and add it to a black list.
//  * It's really annoying to develop that but if you had to, please use Redis as your data store
//  */
// auth.post("/logout", middlewares.isAuth, (req: Request, res: Response, next: NextFunction) => {
//   const logger = Container.get("logger");
//   logger.debug("Calling Sign-Out endpoint with body: %o", req.body);
//   try {
//     //@TODO AuthService.Logout(req.user) do some clever stuff
//     return res.status(200).end();
//   } catch (e) {
//     logger.error("🔥 error %o", e);
//     return next(e);
//   }
// });
