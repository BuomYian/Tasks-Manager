import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router.route('/add').post(taskController.addTask);
router.route('/tasks').get(taskController.getAllTasks);
router.route('/edit/:id').put(taskController.editTask);
router
  .route('/:id')
  .put(taskController.statusChange)
  .delete(taskController.deleteTask);

export default router;
