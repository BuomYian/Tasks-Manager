/*eslint-disable react/prop-types */

import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
  // Retrieve the authentication state from the Redux store
  const isLoggedIn = useSelector((state) => state.auth);

  // Get the current location from the React Router
  const location = useLocation();

  // If the user is not logged in, redirect them to the sign-in page
  if (!isLoggedIn.currentUser) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  // If the user is logged in, render the children components
  return children;
};

export default RequireAuth;
