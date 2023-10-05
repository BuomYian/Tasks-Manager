// Import necessary libraries
import { createSlice } from '@reduxjs/toolkit'; // Import createSlice from Redux Toolkit
import axios from 'axios'; // Import Axios for making HTTP requests
import { toast } from 'react-toastify'; // Import a toast notification library

// Define the initial task state by checking if task data is stored in localStorage
const initialTask = localStorage.getItem('task')
  ? JSON.parse(localStorage.getItem('task'))
  : null;

// Define the initial state of the task slice
const initialState = {
  TaskData: initialTask, // Task-specific data
  AllTasks: {}, // All tasks data
};

// Create a task slice using Redux Toolkit
export const taskSlice = createSlice({
  name: 'Task', // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer to handle successful task addition
    taskAddedSuccessfully: (state, action) => {
      state.TaskData = action.payload; // Update task data
    },
    // Reducer to handle task addition failure
    taskAddFailure: (state) => {
      return state; // Return the current state without modification
    },
    // Reducer to handle successful retrieval of all tasks
    getAllTaskSuccess: (state, action) => {
      state.AllTasks = action.payload; // Update all tasks data
    },
    // Reducer to handle failure in retrieving all tasks
    getAllTaskFailure: (state) => {
      return state; // Return the current state without modification
    },
    // Reducer to handle successful task edit
    editTaskSuccess: (state, action) => {
      state.TaskData = action.payload; // Update task data
    },
    // Reducer to handle successful task deletion
    deleteSuccess: (state, action) => {
      state.TaskData = action.payload; // Update task data
    },
    // Reducer to handle task deletion failure
    deleteFail: (state) => {
      return state; // Return the current state without modification
    },
  },
});

// Export the action creators
export const {
  taskAddFailure,
  taskAddedSuccessfully,
  getAllTaskSuccess,
  getAllTaskFailure,
  editTaskSuccess,
  deleteSuccess,
  deleteFail,
} = taskSlice.actions;

// Export the task reducer
export default taskSlice.reducer;

// Action creator for adding a task
export const addTask = (task, id) => async (dispatch) => {
  const taskData = {
    task,
    id,
  };
  const response = await axios.post('http://localhost:4000/task/add', taskData);

  if (response) {
    localStorage.setItem('task', JSON.stringify(response.data)); // Store task data in localStorage
    dispatch(taskAddedSuccessfully(response.data)); // Dispatch task addition success
    toast.success('Task added successfully'); // Show a success toast notification
    window.location.reload(); // Reload the page
  } else {
    dispatch(taskAddFailure()); // Dispatch task addition failure
  }
};

// Action creator for retrieving all tasks
export const getAlltasks = (token, id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      id,
    },
  };

  try {
    const response = await axios.get(
      'http://localhost:4000/task/tasks',
      config
    );

    if (response) {
      dispatch(getAllTaskSuccess(response.data)); // Dispatch retrieval of all tasks success
    }
  } catch (error) {
    if (error.response.status === 400) {
      dispatch(getAllTaskFailure()); // Dispatch retrieval of all tasks failure
    }
  }
};

// Action creator for handling task status changes (arrowClick)
export const arrowClick = (item, string) => async () => {
  let taskData = {
    id: item._id,
    status: item.status,
    string,
  };

  try {
    let response = await axios.put(
      `http://localhost:4000/task/${taskData.id}`,
      taskData
    );

    if (response) {
      window.location.reload(); // Reload the page after successful status change
    }
  } catch (error) {
    console.log(error);
  }
};

// Action creator for deleting a task
export const deleteItem = (id) => async (dispatch) => {
  let res = await axios.delete(`http://localhost:4000/task/${id}`);

  if (res) {
    dispatch(deleteSuccess()); // Dispatch task deletion success
    toast.success('Task deleted successfully'); // Show a success toast notification
    window.location.reload(); // Reload the page
  } else {
    dispatch(deleteFail()); // Dispatch task deletion failure
  }
};
