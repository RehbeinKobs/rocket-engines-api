interface IPropellant {
  name: string;
  ratio: number;
}

export interface IEngine {
  series: string;
  seriesDescription: string;
  seriesSpecLevel: string;
  manufacturer: string;
  name: string;
  description: string;
  engineType: string;
  specLevel: string;
  tech: string;
  year: number;
  cost: number;
  mass: number;
  minThrust: number;
  maxThrust: number;
  asl: number;
  vac: number;
  gimbalRange: number;
  ullage: boolean;
  pressureFed: boolean;
  literalZeroIgnitions: boolean;
  ignitions: number;
  propellant: IPropellant[];
  ratedBurnTime: Number;
  ignitionReliability: Number;
  cycleReliability: Number;
}
