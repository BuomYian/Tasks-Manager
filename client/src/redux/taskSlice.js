import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialTask = localStorage.getItem('task')
  ? JSON.parse(localStorage.getItem('task'))
  : null;

const initialState = {
  TaskData: initialTask,
  AllTasks: {},
};

export const taskSlice = createSlice({
  name: 'Task',
  initialState,

  reducers: {
    taskAddedSuccessfully: (state, action) => {
      state.TaskData = action.payload;
    },
    taskAddFailure: (state) => {
      return state;
    },
    getAllSuccess: (state, action) => {
      state.AllTasks = action.payload;
    },
    getAllTaskFailure: (state) => {
      return state;
    },
    editTaskSuccess: (state, action) => {
      state.TaskData = action.payload;
    },
    deleteSuccess: (state, action) => {
      state.TaskData = action.payload;
    },
    deleteFail: (state) => {
      return state;
    },
  },
});

export const {
  taskAddFailure,
  taskAddedSuccessfully,
  getAllSuccess,
  getAllTaskFailure,
  editTaskSuccess,
  deleteSuccess,
  deleteFail,
} = taskSlice.actions;

export default taskSlice.reducer;

export const addTask = (task, id) => async (dispatch) => {
  const taskData = {
    task,
    id,
  };
  const response = await axios.post('http://localhost:4000/task/add', taskData);
  if (response) {
    localStorage.setItem('task', JSON.stringify(response.data));
    dispatch(taskAddedSuccessfully(response.data));
    window.location.reload();
  } else {
    dispatch(taskAddFailure());
  }
};
