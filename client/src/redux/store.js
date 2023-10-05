// Import the necessary libraries
import { configureStore } from '@reduxjs/toolkit';

// Import the Redux reducers
import authReducer from './authSlice';
import taskReducer from './taskSlice';

// Create the Redux store using configureStore
export const store = configureStore({
  reducer: { auth: authReducer, task: taskReducer }, // Combine multiple reducers into one root reducer
});
