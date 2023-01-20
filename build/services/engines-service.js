"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_service_1 = __importDefault(require("./abstract-service"));
const engine_model_1 = __importDefault(require("../models/engine-model"));
class enginesService extends abstract_service_1.default {
    constructor() {
        super(new engine_model_1.default());
    }
}
exports.default = enginesService;
