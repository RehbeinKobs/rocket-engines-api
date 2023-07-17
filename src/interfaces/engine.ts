interface IPropellant {
  name: string;
  ratio: number;
}

export interface IEngine {
  seriesName: string;
  seriesDescription: string;
  seriesSpecLevel: string;
  manufacturer: string;
  name: string;
  description: string;
  sourceUrl: string;
  imageUrl: string;
  type: string;
  specLevel: string;
  tech: string;
  mass: number;
  minThrust: number;
  maxThrust: number;
  ispASL: number;
  ispVac: number;
  gimbalRange: number;
  ullage: boolean;
  pressureFed: boolean;
  literalZeroIgnitions: boolean;
  ignitions: number;
  propellant: IPropellant[];
  ratedBurnTime: number;
  ignitionReliability: number;
  cycleReliability: number;
}
