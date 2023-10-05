import { createSlice } from '@reduxjs/toolkit'; // Import createSlice from Redux Toolkit
import axios from 'axios'; // Import Axios for making HTTP requests
import history from '../history'; // Import the history object for navigation
import { toast } from 'react-toastify'; // Import a toast notification library

// Define the initial user state by checking if user data is stored in localStorage
const initialUser = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : null;

// Define the initial state of the authentication slice
const initialState = {
  isLoading: false, // Loading state flag
  currentUser: initialUser, // Current user data
  error: null, // Error state
};

// Create an authentication slice using Redux Toolkit
export const authSlice = createSlice({
  name: 'auth', // Slice name
  initialState: initialState, // Initial state
  reducers: {
    // Reducer to handle successful login
    loginSuccess: (state, action) => {
      state.currentUser = action.payload; // Update the current user data
      state.isLoading = false; // Set loading to false
    },
    // Reducer to handle login failure
    loginFailure: (state, action) => {
      state.error = action.payload; // Update the error state
    },
    // Reducer to handle successful registration
    registerSuccess: (state, action) => {
      state.currentUser = action.payload; // Update the current user data
      state.isLoading = false; // Set loading to false
    },
    // Reducer to handle registration failure
    registerFailure: (state, action) => {
      state.error = action.payload; // Update the error state
    },
    // Reducer to handle successful logout
    logoutSuccess: (state) => {
      state.currentUser = null; // Set the current user to null
    },
  },
});

// Export the action creators
export const {
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;

// Export the authentication reducer
export default authSlice.reducer;

// Action creator for user registration
export const register = (user) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };

    const response = await axios.post(
      'http://localhost:4000/auth/register',
      user,
      config
    );

    if (response) {
      dispatch(registerSuccess(response.data)); // Dispatch registration success
      toast.success('Registration successful'); // Show a success toast notification
      history.push('/signin'); // Redirect to the signin page
      window.location.reload(); // Reload the page
    } else {
      dispatch(registerFailure()); // Dispatch registration failure
      toast.error('Registration failed'); // Show an error toast notification
    }
  } catch (error) {
    console.log(error);
    dispatch(registerFailure()); // Dispatch registration failure in case of an exception
  }
};

// Action creator for user signin
export const signin = (user) => async (dispatch) => {
  try {
    const userData = {
      email: user.email,
      password: user.password,
    };
    const response = await axios.post(
      'http://localhost:4000/auth/signin',
      userData
    );
    if (response) {
      localStorage.setItem('auth', JSON.stringify(response.data)); // Store user data in localStorage
      dispatch(loginSuccess(response.data)); // Dispatch login success
      history.push('/dashboard'); // Redirect to the dashboard
      toast.success('Login successful'); // Show a success toast notification
      window.location.reload(); // Reload the page
    } else {
      dispatch(loginFailure()); // Dispatch login failure
      toast.error('Login failed'); // Show an error toast notification
    }
  } catch (error) {
    dispatch(loginFailure()); // Dispatch login failure in case of an exception
  }
};
