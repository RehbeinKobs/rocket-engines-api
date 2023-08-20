import { Model, model, models, Schema, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  constructor(modelName: string, schema: Schema) {
    this.model = models[modelName] || model<T>(modelName, schema);
  }
  insertOne(data: T) { return this.model.create(data) }
  insertMany(data: T[]) { return this.model.insertMany(data) }
  findAll() { return this.model.find({}) }
  findById(id: string) { return this.model.findById(id) }
  findByField(field: string, value: string) { return this.model.find({ [field]: { $regex: new RegExp(`${value}`, "i") } } as object) }
  deleteById(id: string) { return this.model.findByIdAndDelete(id)}
  updateById(id: string, data: UpdateQuery<T>) { return this.model.findByIdAndUpdate(id, data) }
}

export default AbstractODM;