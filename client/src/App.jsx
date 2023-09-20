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

// import './styles/main.scss';

function App() {
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={!auth.currentUser ? <Signin /> : <Dashboard />}
          />
          <Route
            path="/signup"
            element={!auth.currentUser ? <Signup /> : <Dashboard />}
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
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
