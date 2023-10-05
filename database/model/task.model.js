import mongoose from 'mongoose';

// Define the Task Schema
const taskSchema = mongoose.Schema(
  {
    task: { type: String }, // Task description
    status: {
      type: String,
      enum: ['backlog', 'todo', 'doing', 'done'], // Allowed task statuses
      default: 'backlog', // Default status is 'backlog'
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model, indicating the creator of the task
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

// Create the Mongoose model for "Task"
const Task = mongoose.model('Task', taskSchema);

export default Task;
