import {Application} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import methodOverride from "method-override";
import {logger} from "./logger";

export function expressLoaders(app: Application) {
  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable("trust proxy");

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // "Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it."
  app.use(methodOverride());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());

  // Log requests
  app.use(logger);
}
