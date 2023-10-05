// Import necessary libraries and styles
import { Link } from 'react-router-dom'; // Import Link component for routing
import './sidebar.scss'; // Styles for the sidebar
import { useSelector } from 'react-redux'; // Import Redux useSelector hook for accessing state

// Define the Sidebar functional component
const Sidebar = () => {
  // Use the useSelector hook to access the 'auth' state from Redux store
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth; // Destructure 'currentUser' from the 'auth' state

  return (
    <div>
      <ul className="sidebar">
        {/* Display the username of the current user */}
        <li className="list-item">
          <h4>{currentUser.username}</h4>
        </li>
        {/* Create navigation links */}
        <li className="list-item">
          <Link to="/">Home</Link> {/* Link to the Home page */}
        </li>
        <li className="list-item">
          <Link to="/dashboard">Dashboard</Link>{' '}
          {/* Link to the Dashboard page */}
        </li>
        <li className="list-item">
          <Link to="/setting">Settings</Link> {/* Link to the Settings page */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; // Export the Sidebar component for use in other parts of the application
