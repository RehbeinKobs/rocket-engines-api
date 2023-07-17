import abstractService from './abstract-service';
import engineModel from '../models/engine-model';
import { IEngine } from '../interfaces/engine';

class enginesService extends abstractService<IEngine> {
  constructor() {
    super(new engineModel());
  }
}

export default enginesService;