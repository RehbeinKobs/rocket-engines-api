import AbstractODM from './abstract-odm';
import { IEngine } from '../interfaces/engine';
import SEngine from '../schemas/engine';

class EngineModel extends AbstractODM<IEngine> {
  constructor() {
    super('Engine', SEngine);
  }
}

export default EngineModel;