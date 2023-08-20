import AbstractService from './abstract-service';
import EngineModel from '../models/engine-model';
import { IEngine } from '../interfaces/engine';

class EnginesService extends AbstractService<IEngine> {
  protected model: EngineModel;
  constructor() {
    const engineModel = new EngineModel();
    super(engineModel);
    this.model = engineModel;
  }
}

export default EnginesService;