import { Schema } from 'mongoose';
import { IEngine } from '../interfaces/engine';

const SEngine = new Schema<IEngine>({
  seriesName: { type: String, required: true },
  seriesDescription: { type: String, required: true },
  seriesSpecLevel: { type: String, required: true },
  manufacturer: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  sourceUrl: { type: String, required: true },
  imageUrl: { type: String, required: true },
  type: { type: String, required: true },
  specLevel: { type: String, required: true },
  tech: { type: String, required: true },
  mass: { type: Number, required: true },
  minThrust: { type: Number, required: true },
  maxThrust: { type: Number, required: true },
  ispASL: { type: Number, required: true },
  ispVac: { type: Number, required: true },
  gimbalRange: { type: Number, required: true },
  ullage: { type: Boolean, required: true },
  pressureFed: { type: Boolean, required: true },
  literalZeroIgnitions: { type: Boolean, required: true },
  ignitions: { type: Number, required: true },
  propellant: [{ name: { type: String, required: true }, ratio: { type: Number, required: true } }],
  ratedBurnTime: { type: Number, required: true },
  ignitionReliability: { type: Number, required: true },
  cycleReliability: { type: Number, required: true },
});

export default SEngine;