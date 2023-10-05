import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import TaskManager from './pages/taskmanagement/TaskManager';
import RequireAuth from './utils/RequireAuth';
import { useSelector } from 'react-redux';

function App() {
  // Use useSelector to access the authentication state from Redux store
  const { auth } = useSelector((state) => ({ ...state }));

  return (
    <div>
      <Router>
        {/* Render the Header component at the top of the application */}
        <Header />

        <Routes>
          {/* Define routes for different pages and components */}
          <Route path="/" element={<Home />} />

          {/* Route for Signin and Signup pages with conditional rendering */}
          <Route
            path="/signin"
            element={!auth.currentUser ? <Signin /> : <Dashboard />}
          />
          <Route
            path="/signup"
            element={!auth.currentUser ? <Signup /> : <Dashboard />}
          />

          {/* Route for the Dashboard page with authentication protection */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />

          {/* Route for the TaskManager page with authentication protection */}
          <Route
            path="/taskmanager"
            element={
              <RequireAuth>
                <TaskManager />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
