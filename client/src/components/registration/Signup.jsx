// Import necessary stylesheets and libraries
import './registration.scss'; // Styles for the registration component
import '../../styles/components/_button.scss'; // Styles for buttons
import { useState } from 'react'; // Import React useState hook for managing state
import { useDispatch } from 'react-redux'; // Import Redux useDispatch hook for dispatching actions
import { register } from '../../redux/authSlice'; // Import Redux action 'register' from 'authSlice'

// Define the Signup functional component
const Signup = () => {
  const dispatch = useDispatch();
  // Initialize state using the useState hook to manage username, email, and password input fields
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    dispatch(
      register({
        username: state.username,
        email: state.email,
        password: state.password,
      })
    ); // Dispatch the 'register' action with username, email, and password from the state
  };

  // Define a function to handle input field changes
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, // Update the state with the new input value
    });
  };

  console.log(state.email, state.password, state.username);
  return (
    <div className="signup-form">
      <div className="signup-form__wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h4>Sign up</h4>
          <br />
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Name"
              name="username"
              value={state.username}
              onChange={handleChange} // Handle changes in the username input field
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={state.email}
              placeholder="Enter Email"
              onChange={handleChange} // Handle changes in the email input field
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={state.password}
              placeholder="Enter Password"
              onChange={handleChange} // Handle changes in the password input field
            />
          </div>
          <div className="form-group">
            <button className="button">Sign Up</button> {/* Submit the form */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup; // Export the Signup component for use in other parts of the application
