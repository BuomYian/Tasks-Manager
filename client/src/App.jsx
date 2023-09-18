import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import TaskManager from './pages/taskmanagement/TaskManager';

// import './styles/main.scss';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/taskmanager" element={<TaskManager />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
