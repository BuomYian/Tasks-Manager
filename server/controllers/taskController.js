import Task from '../../database/model/task.model.js';

// Controller function to add a new task
const addTask = async (req, res) => {
  const { task, id } = req.body;

  try {
    // Validate task input
    if (!task) {
      return res.status(400).send('Please enter the task');
    }
    if (task.length < 10) {
      return res.status(400).send('Add a minimum of 10 characters');
    }

    // Create a new task and associate it with the user (createdBy)
    const taskDetail = await new Task({
      task,
      createdBy: id,
    });

    // Save the task to the database
    await taskDetail.save();

    // Send a successful response with the newly created task
    return res.status(200).send(taskDetail);
  } catch (error) {
    return res.status(400).send('Task addition failed');
  }
};

// Controller function to get all tasks for a specific user
const getAllTasks = async (req, res) => {
  const { id } = req.query;
  try {
    // Retrieve all tasks associated with the user (createdBy)
    let tasklist = await Task.find({ createdBy: id });

    // Send a successful response with the list of tasks
    return res.status(200).send(tasklist);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// Controller function to edit a task (not implemented in the provided code)
const editTask = async (req, res) => {
  // Implement task editing logic here
};

// Controller function to change the status of a task (right or left)
const statusChange = async (req, res) => {
  const { id, string } = req.body;

  try {
    // Find the task by its ID
    let task = await Task.findById({ _id: id });

    // Implement logic to change task status based on 'string' (right or left)
    if (string === 'right') {
      if (task.status === 'backlog') {
        task.status = 'todo';
      } else if (task.status === 'todo') {
        task.status = 'doing';
      } else if (task.status === 'doing') {
        task.status = 'done';
      }
    } else {
      if (task.status === 'done') {
        task.status = 'doing';
      } else if (task.status === 'doing') {
        task.status = 'todo';
      } else if (task.status === 'todo') {
        task.status = 'backlog';
      }
    }

    // Save the updated task status
    await task.save();

    // Send a response with the updated task
    return res.send(task);
  } catch (error) {
    console.log(error);
  }
};

// Controller function to delete a task by its ID
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    // Find and delete the task by its ID
    let response = await Task.findByIdAndDelete(id);

    // Send a successful response indicating that the task has been deleted
    return res.status(200).send(response);
  } catch (error) {
    res.status(400).send('Delete failed');
  }
};

export default { addTask, getAllTasks, editTask, statusChange, deleteTask };
