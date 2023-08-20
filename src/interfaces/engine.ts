interface IPropellant {
  name: string;
  ratio: string;
}

export interface IEngine {
  config: string
  engineType: string
  seriesName: string
  seriesDescription: string
  manufacturer: string
  sourceUrl: string
  imageUrl: string
  tags: string[]
  seriesSpecLevel: string
  roundOnly: string
  gimbalRange: string
  origMass: string
  cost: string
  entryCost: string
  category: string
  year: string
  technology: string
  era: string
  orphan: string
  upgrade: string
  spacecraft: string
  massMult: string
  name: string
  description: string
  specLevel: string
  maxThrust: string
  minThrust: string
  ullage: string
  pressureFed: string
  ignitions: string
  propellant: IPropellant[]
  ispVac: string
  ispAsl: string
  ratedBurnTime: string
  testedBurnTime: string
  safeOverburn: string
  ignitionReliabilityStart: string
  ignitionReliabilityEnd: string
  cycleReliabilityStart: string
  cycleReliabilityEnd: string
}