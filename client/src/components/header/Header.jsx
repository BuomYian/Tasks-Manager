// Import necessary stylesheets and libraries
import './header.scss'; // Styles for the header component
import '../../styles/components/_button.scss'; // Styles for buttons
import { useSelector, useDispatch } from 'react-redux'; // Import Redux hooks
import { Link } from 'react-router-dom'; // Import Link component for routing
import { logoutSuccess } from '../../redux/authSlice'; // Import Redux action
import history from '../../history'; // Import the history object for navigation

// Define the Header functional component
const Header = () => {
  // Initialize Redux useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Use the useSelector hook to access the 'auth' state from Redux store
  const { auth } = useSelector((state) => ({ ...state }));

  // Define a function to handle the Sign Out button click
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    dispatch(logoutSuccess()); // Dispatch the 'logoutSuccess' action
    localStorage.removeItem('auth'); // Remove 'auth' data from local storage
    history.push('/signin'); // Redirect to the '/signin' route
    window.location.reload(); // Reload the page (this may not be necessary in all cases)
  };

  return (
    // Render the header navigation component
    <nav className="header">
      <div className="header__logo">
        {/* Create a link to the home page */}
        <Link to="/">
          <h3>Tasks Manager</h3>
        </Link>
      </div>
      <div className="header__buttons">
        {/* Conditional rendering based on user authentication */}
        {auth.currentUser && auth.currentUser.token ? (
          // If the user is authenticated, show Sign Out button
          <Link to="/signin" className="button" onClick={handleClick}>
            Sign Out
          </Link>
        ) : (
          // If the user is not authenticated, show Sign In and Sign Up buttons
          <>
            <Link to="/signin" className="button">
              Sign In
            </Link>
            <Link to="/signup" className="button">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header; // Export the Header component for use in other parts of the application
