import { Link } from 'react-router-dom';
import './sidebar.scss';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div>
      <ul className="sidebar">
        <li className="list-item">
          <h4>{currentUser.username}</h4>
        </li>
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="list-item">
          <Link to="/setting">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
