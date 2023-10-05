// Import necessary styles and libraries
import './home.scss'; // Styles for the Home component
import { useSelector } from 'react-redux'; // Import Redux useSelector hook for state management
import { Link } from 'react-router-dom'; // Import Link component for routing

// Define the Home functional component
const Home = () => {
  // Use the useSelector hook to access the 'auth' state from Redux store
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth; // Destructure 'currentUser' from the 'auth' state

  return (
    <div className="home">
      <div className="home__container">
        <h2>Organize it all</h2>
        <p>With Task Manager</p>

        {currentUser && currentUser.token ? (
          // If the user is authenticated, display 'Get Started' button linking to the dashboard
          <Link to="/dashboard" className="button">
            Get Started
          </Link>
        ) : (
          // If the user is not authenticated, display 'Get Started' button linking to the signin page
          <Link to="/signin" className="button">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home; // Export the Home component for use in other parts of the application
