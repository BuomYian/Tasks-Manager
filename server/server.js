import express from 'express';
import { connectdb } from '../database/db.js'; // Import the database connection function
import cors from 'cors';
import taskRouter from './routes/taskRoutes.js'; // Import the task routes
import authRoutes from './routes/authRoutes.js'; // Import the authentication routes
import morgan from 'morgan';

const app = express();

// Connect to the MongoDB database
connectdb();

app.use(cors()); // Enable CORS for cross-origin requests
app.use(morgan('dev')); // Use the Morgan middleware for request logging
app.use(express.json()); // Parse JSON request bodies

// Define route handlers for authentication and task management
app.use('/auth', authRoutes); // Use the authentication routes under the '/auth' path
app.use('/task', taskRouter); // Use the task management routes under the '/task' path

const PORT = 4000;

// Start the Express server and listen on port 4000
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
