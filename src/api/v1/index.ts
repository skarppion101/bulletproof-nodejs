import {Router} from "express";
import {auth} from "./routes/auth";
import RestypedRouter from "restyped-express-async";
import {APIDoc} from "./doc";

export const apiV1 = RestypedRouter<APIDoc>(Router());

apiV1.use(auth);
