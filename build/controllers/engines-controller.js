"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_controller_1 = __importDefault(require("./abstract-controller"));
const engines_service_1 = __importDefault(require("../services/engines-service"));
class enginesController extends abstract_controller_1.default {
    constructor() {
        super(new engines_service_1.default());
    }
}
exports.default = enginesController;
