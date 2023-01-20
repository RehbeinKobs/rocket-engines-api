"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_odm_1 = __importDefault(require("./abstract-odm"));
const engine_1 = __importDefault(require("../schemas/engine"));
class engineModel extends abstract_odm_1.default {
    constructor() {
        super('Engine', engine_1.default);
    }
}
exports.default = engineModel;
