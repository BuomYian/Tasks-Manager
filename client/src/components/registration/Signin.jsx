// Import necessary stylesheets and libraries
import './registration.scss'; // Styles for the registration component
import '../../styles/components/_button.scss'; // Styles for buttons
import { useState } from 'react'; // Import React useState hook for managing state
import { useDispatch } from 'react-redux'; // Import Redux useDispatch hook for dispatching actions
import { signin } from '../../redux/authSlice'; // Import Redux action 'signin' from 'authSlice'

// Define the Signin functional component
const Signin = () => {
  const dispatch = useDispatch();
  // Initialize state using the useState hook to manage email and password input fields
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  // Define a function to handle input field changes
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, // Update the state with the new input value
    });
  };

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    dispatch(
      signin({
        email: state.email,
        password: state.password,
      })
    ); // Dispatch the 'signin' action with email and password from the state
  };

  return (
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h4>Sign in</h4>
            <br />
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
                placeholder="Enter password"
                onChange={handleChange} // Handle changes in the password input field
              />
            </div>
            <div className="form-group">
              <button className="button">Sign in</button>{' '}
              {/* Submit the form */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin; // Export the Signin component for use in other parts of the application
