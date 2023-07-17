import { UpdateQuery } from "mongoose";
import abstractODM from "../models/abstract-odm";

abstract class abstractService<T> {
  private model: abstractODM<T>;
  constructor(model: abstractODM<T>) {
    this.model = model;
  }
  findAll() { return this.model.findAll() }
  findById(id: string) { return this.model.findById(id) }
  insert(data: T[]) { return this.model.insertMany(data) }
  deleteById(id: string) { return this.model.deleteById(id)}
  updateById(id: string, data: UpdateQuery<T>) { return this.model.updateById(id, data) }
}

export default abstractService;