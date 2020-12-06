"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseModel {
    constructor(data) {
        this.data = data || { object: "default" };
        this.errors = { critical: false, messages: [] };
        this.timestamp = new Date();
    }
    /* Adds a warning, (proceed as http status 442).
    Unprocessable Entity response status code indicates
    that the server understands the content type of the request entity,
    and the syntax of the request entity is correct,
    but it was unable to process the contained instructions.
    The warning text MAY include
    arbitrary information to be presented to a human user, or logged.
  
    A system receiving this warning MUST NOT take any automated action,
    besides presenting the warning to the user.*/
    addWarning(msg) {
        console.log("⚠️ ", msg);
        this.errors.messages.push(msg);
    }
    /* Adds a critical error, (proceed as http status 500).
    The server encountered an unexpected condition which prevented it from fulfilling the request,
    in our case, an unrecoverable error (any throws being triggered during the process of the request). */
    addError(msg) {
        console.log("⚡ ", msg);
        this.errors.critical = true;
        this.errors.messages.push(msg);
    }
}
exports.ResponseModel = ResponseModel;
//# sourceMappingURL=response.js.map