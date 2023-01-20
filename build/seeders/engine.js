"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const engine_1 = __importDefault(require("../models/engine"));
const fs_1 = __importDefault(require("fs"));
const enginesData = JSON.parse(fs_1.default.readFileSync('../../data/engines/engines.JSON', 'utf-8'));
const EngineModel = new engine_1.default();
(0, mongoose_1.connect)('mongodb://172.17.0.2:27017/RocketStore').then(() => {
    EngineModel.insertOne(enginesData[0]).then((result) => {
        console.log(result);
    }).catch((e) => console.log(e.message));
});
