"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
// Imports configs and other cons
const const_1 = require("./config/const");
// Imports the routers.
const ItemRouter_1 = require("./routes/ItemRouter");
class App {
    constructor() {
        this.app = express();
        this.middleware();
    }
    middleware() {
        return __awaiter(this, void 0, void 0, function* () {
            // Initializating the libraries and the express config.
            this.app.use(cors()); // Allows Control Acess Protol to work outside of a localhost.
            this.app.use(compression()); // Compresses the requests.
            this.app.use(logger("common", const_1.LOGCONF)); // Outputs logs to a file
            this.app.use(logger("dev")); // Loggers, one to file (upper line) and another to console.
            this.app.use(bodyParser.json({ limit: "100mb" })); // Parses automaticallythe requests, and adds a limit.
            this.app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" })); // Manages the encoded urls, and adds a limit.
            this.app.use("/api/v1/static", express.static(path.join(__dirname, "/public"))); // Exposes a static folder to the exterior.
            // Routers
            this.app.use(`/${const_1.API}items`, ItemRouter_1.default);
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map