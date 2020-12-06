import { NextFunction, Request, Response, Router } from "express";
import { itemController } from "../controllers/itemController";
import { ResponseModel } from "../config/response";

export class ItemRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  // Theses methods handle the process between the data process and the response.

  // Get all tags
  public async getTags(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response> {
    const reply = new ResponseModel();
    reply.data = await itemController.getItems().catch((err) => {
      reply.addError(err.message);
      res.status(442);
    });

    res.setHeader("Content-Type", "application/json");
    return res.json(reply);
  }

  public init() {
    this.router.get("/", this.getTags);
  }
}

const itemRouter = new ItemRouter();
export default itemRouter.router;
