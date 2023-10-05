import express from 'express';
import authController from '../controllers/authController.js';

// Create a router instance
const router = express.Router();

// Define routes for user authentication (signin and register)
router.route('/signin').post(authController.signin);
router.route('/register').post(authController.register);

// Export the router for use in other parts of the application
export default router;
