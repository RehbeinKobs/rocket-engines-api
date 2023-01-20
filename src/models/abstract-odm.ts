import { Model, model, models, ObjectId, Schema, UpdateQuery } from 'mongoose'

abstract class abstractODM<T> {
  model: Model<T>;
  constructor(modelName: string, schema: Schema) {
    this.model = models[modelName] || model<T>(modelName, schema);
  }
  insertOne(data: T) { return this.model.create(data) }
  insertMany(data: T[]) { return this.model.insertMany(data) }
  findAll() { return this.model.find({}) }
  findById(id: ObjectId) { return this.model.findById(id) }
  deleteById(id: ObjectId) { return this.model.findByIdAndDelete(id)}
  updateById(id: ObjectId, data: UpdateQuery<T>) { return this.model.findByIdAndUpdate(id, data) }
}

export default abstractODM;