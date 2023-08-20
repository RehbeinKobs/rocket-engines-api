import AbstractController from "./abstract-controller";
import { IEngine } from "../interfaces/engine";
import EnginesService from "../services/engines-service";

class EnginesController extends AbstractController<IEngine> {
  protected service: EnginesService;
  constructor() {
    const enginesService = new EnginesService();
    super(enginesService);
    this.service = enginesService;
  }
}

export default EnginesController;