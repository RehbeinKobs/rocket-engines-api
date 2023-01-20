"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SEngine = new mongoose_1.Schema({
    series: String,
    seriesDescription: String,
    seriesSpecLevel: String,
    manufacturer: String,
    name: String,
    description: String,
    engineType: String,
    specLevel: String,
    tech: String,
    year: Number,
    cost: Number,
    mass: Number,
    minThrust: Number,
    maxThrust: Number,
    asl: Number,
    vac: Number,
    gimbalRange: Number,
    ullage: Boolean,
    pressureFed: Boolean,
    literalZeroIgnitions: Boolean,
    ignitions: Number,
    propellant: [{ name: String, ratio: Number }],
    ratedBurnTime: Number,
    ignitionReliability: Number,
    cycleReliability: Number,
});
exports.default = SEngine;
