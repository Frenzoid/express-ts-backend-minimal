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
const Item_1 = require("../models/Item");
class ItemController {
    // Get all Items.
    getItems(req) {
        return __awaiter(this, void 0, void 0, function* () {
            // Bussines code goes here.
            const items = [];
            items.push(new Item_1.Item("1"));
            items.push(new Item_1.Item("2"));
            items.push(new Item_1.Item("3"));
            return items;
        });
    }
}
exports.itemController = new ItemController();
//# sourceMappingURL=itemController.js.map