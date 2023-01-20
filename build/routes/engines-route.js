"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const engines_controller_1 = __importDefault(require("../controllers/engines-controller"));
const router = express_1.default.Router();
const EnginesController = new engines_controller_1.default();
router.route('/')
    //users only
    .get(EnginesController.findAll);
//adm only
// .post(EnginesController.insert);
// router.route('/:id')
//users only
// .get(EnginesController.findById)
//adm only
// .put(EnginesController.updateById)
//adm only
// .delete(EnginesController.deleteById);
exports.default = router;
