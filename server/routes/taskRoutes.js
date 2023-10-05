import express from 'express';
import taskController from '../controllers/taskController.js';

// Create a router instance
const router = express.Router();

// Define routes for task management
// - Route for adding a task via POST request
router.route('/add').post(taskController.addTask);

// - Route for fetching all tasks associated with a user via GET request
router.route('/tasks').get(taskController.getAllTasks);

// - Route for editing a task via PUT request with a specific task ID in the URL
router.route('/edit/:id').put(taskController.editTask);

// - Route for changing the status of a task via PUT request with a specific task ID in the URL
// - Also, route for deleting a task via DELETE request with a specific task ID in the URL
router
  .route('/:id')
  .put(taskController.statusChange)
  .delete(taskController.deleteTask);

// Export the router for use in other parts of the application
export default router;
