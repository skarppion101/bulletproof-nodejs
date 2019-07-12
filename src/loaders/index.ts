import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import jobsLoader from "./jobs";
import Logger from "./logger";
import {Application} from "express";

export function addLoaders(app: Application) {
  const mongoConnection = mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  /**
   * WTF is going on here?
   *
   * We are injecting the mongoose models into the DI container.
   * I know this is controversial but will provide a lot of flexibility at the time
   * of writing unit tests, just go and check how beautiful they are!
   */

  const userModel = {
    name: "userModel",
    // Notice the require syntax and the '.default'
    model: require("../models/user").default,
  };

  // It returns the agenda instance because it's needed in the subsequent loaders
  const {agenda} = dependencyInjectorLoader({
    mongoConnection,
    models: [
      userModel,
      // salaryModel,
      // whateverModel
    ],
  });
  Logger.info("✌️ Dependency Injector loaded");

  jobsLoader({agenda});
  Logger.info("✌️ Jobs loaded");

  expressLoader({app});
  Logger.info("✌️ Express loaded");
}
