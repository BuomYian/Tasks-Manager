import './header.scss';
import '../../styles/components/_button.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';
import history from '../../history';

const Header = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem('auth');
    history.push('/signin');
    window.location.reload();
  };

  return (
    <nav className="header">
      <div className="header__logo">
        <Link to="/">
          <h3>Tasks Manager</h3>
        </Link>
      </div>
      <div className="header__buttons">
        {auth.currentUser && auth.currentUser.token ? (
          <Link to="/signin" className="button" onClick={handleClick}>
            Sign Out
          </Link>
        ) : (
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

export default Header;
