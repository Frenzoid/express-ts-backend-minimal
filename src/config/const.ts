import * as fs from "fs";

export const SERVER = `${process.env.APPAPIURL}:${process.env.APPPORT}/`;
export const API = "api/v1/";

export const LOGCONF = {
  stream: fs.createWriteStream("./log/access.log", { flags: "a" }),
};

/* STATIC: url paths to access to the media externally: example:
          http://localhost:8001/api/v1/static/media/users/f23b64940e9842e04382cdb6a2c6c712.jpeg

  PUBLIC: folder paths to access the media internally: example:
          express-typescript\dist\public\media\users
*/
