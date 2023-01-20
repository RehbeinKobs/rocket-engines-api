import { Schema } from 'mongoose';
import { IEngine } from '../interfaces/engine';

const SEngine = new Schema<IEngine>({
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

export default SEngine;