import { Item } from "../models/Item";
import { Request } from "express";

class ItemController {
  // Get all Items.
  public async getItems(req: Request): Promise<Item[]> {
    // Bussines code goes here.
    const items: Item[] = [];
    items.push(new Item("1"));
    items.push(new Item("2"));
    items.push(new Item("3"));
    return items;
  }
}

export const itemController = new ItemController();
