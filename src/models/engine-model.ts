import abstractODM from './abstract-odm';
import { IEngine } from '../interfaces/engine';
import SEngine from '../schemas/engine';

class engineModel extends abstractODM<IEngine> {
  constructor() {
    super('Engine', SEngine);
  }
}

export default engineModel;