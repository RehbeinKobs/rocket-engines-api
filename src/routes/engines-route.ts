import express from 'express';
import enginesController from '../controllers/engines-controller';

const router = express.Router();

const EnginesController = new enginesController();

router.route('/')
  .get(EnginesController.findAll)
  .post(EnginesController.insert);
router.route('/id/:id')
  .get(EnginesController.findById)
  .put(EnginesController.updateById)
  .delete(EnginesController.deleteById);
router.route('/field')
  .get(EnginesController.findByField);

export default router;