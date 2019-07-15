import {Router} from "express";
import auth from "./routes/auth";

export const apiV1 = Router();

apiV1.use("/auth", auth);
auth(apiV1);
