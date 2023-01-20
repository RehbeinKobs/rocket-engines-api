import abstractODM from "../models/abstract-odm";

class abstractService<T> {
  private model: abstractODM<T>;
  constructor(model: abstractODM<T>) {
    this.model = model;
  }
  findAll() {
    return this.model.findAll();
  }
}

export default abstractService;