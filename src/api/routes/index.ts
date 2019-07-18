import {Application, Router} from "express";
import RestypedRouter from "restyped-express-async";
import {APIDoc} from "../v1/doc";

export const STATUS = "/status";

// export const status = RestypedRouter<APIDoc>(Router());
export const status = RestypedRouter<APIDoc>(Router());
export const r = Router();

status.get(STATUS, (req, res) => {
  return new Promise(resolve => {
    res.status(200).send();
    resolve();
  });
});

status.head(STATUS, (req, res) => {
  return new Promise(resolve => {
    res.status(200).send();
    resolve();
  });
});

export function f(app: Application) {
  // const status = RestypedRouter<APIDoc>(Router());
  //
  // status.get(STATUS, (req, res) => {
  //   return new Promise(resolve => {
  //     res.status(200).send();
  //     resolve();
  //   });
  // });
  //
  // status.head(STATUS, (req, res) => {
  //   return new Promise(resolve => {
  //     res.status(200).send();
  //     resolve();
  //   });
  // });
}
