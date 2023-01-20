"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class abstractService {
    constructor(model) {
        this.model = model;
    }
    findAll() {
        return this.model.findAll();
    }
}
exports.default = abstractService;
