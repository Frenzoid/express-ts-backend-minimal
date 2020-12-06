import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

// Imports configs and other cons
import { API, LOGCONF } from "./config/const";

// Imports the routers.
import itemRouter from "./routes/ItemRouter";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
  }

  private async middleware(): Promise<any> {
    // Initializating the libraries and the express config.
    this.app.use(cors()); // Allows Control Acess Protol to work outside of a localhost.
    this.app.use(compression()); // Compresses the requests.
    this.app.use(logger("common", LOGCONF)); // Outputs logs to a file
    this.app.use(logger("dev")); // Loggers, one to file (upper line) and another to console.
    this.app.use(bodyParser.json({ limit: "100mb" })); // Parses automaticallythe requests, and adds a limit.
    this.app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" })); // Manages the encoded urls, and adds a limit.
    this.app.use(
      "/api/v1/static",
      express.static(path.join(__dirname, "/public")),
    ); // Exposes a static folder to the exterior.

    // Routers
    this.app.use(`/${API}items`, itemRouter);
  }
}

export default new App().app;
