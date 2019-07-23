import {Application} from "express";
import {IEnv} from "../env";

export interface IJobs {
  queue: any;
}

export function initJobs(app: Application, env: IEnv): IJobs {
  return {
    queue: [],
  };
}
