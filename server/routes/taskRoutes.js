import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router.route('/add').post(taskController.addTask);

export default router;
