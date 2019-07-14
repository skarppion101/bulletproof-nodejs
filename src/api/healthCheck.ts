import {Application} from "express";

export function healthCheckStatus(app: Application) {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });
}
