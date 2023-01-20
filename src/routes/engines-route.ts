import express from 'express';
import enginesController from '../controllers/engines-controller';

const router = express.Router();

const EnginesController = new enginesController();

router.route('/')
  //users only
  .get(EnginesController.findAll)
  //adm only
  // .post(EnginesController.insert);
// router.route('/:id')
  //users only
  // .get(EnginesController.findById)
  //adm only
  // .put(EnginesController.updateById)
  //adm only
  // .delete(EnginesController.deleteById);

export default router;