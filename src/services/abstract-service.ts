import { UpdateQuery } from 'mongoose';
import AbstractODM from '../models/abstract-odm';

abstract class AbstractService<T> {
  protected model: AbstractODM<T>;
  constructor(model: AbstractODM<T>) {
    this.model = model;
  }
  findAll() { return this.model.findAll() }
  findById(id: string) { return this.model.findById(id) }
  findByField({ field, value }: { field: string, value: string }) { return this.model.findByField(field, value) }
  insert(data: T[]) { return this.model.insertMany(data) }
  deleteById(id: string) { return this.model.deleteById(id)}
  updateById(id: string, data: UpdateQuery<T>) { return this.model.updateById(id, data) }
}

export default AbstractService;