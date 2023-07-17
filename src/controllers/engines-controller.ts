import abstractController from "./abstract-controller";
import { IEngine } from "../interfaces/engine";
import enginesService from "../services/engines-service";

class enginesController extends abstractController<IEngine> {
  constructor() {
    super(new enginesService());
  }
}

export default enginesController;