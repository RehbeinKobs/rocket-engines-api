"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class abstractODM {
    constructor(modelName, schema) {
        this.model = mongoose_1.models[modelName] || (0, mongoose_1.model)(modelName, schema);
    }
    insertOne(data) { return this.model.create(data); }
    insertMany(data) { return this.model.insertMany(data); }
    findAll() { return this.model.find({}); }
    findById(id) { return this.model.findById(id); }
    deleteById(id) { return this.model.findByIdAndDelete(id); }
    updateById(id, data) { return this.model.findByIdAndUpdate(id, data); }
}
exports.default = abstractODM;
