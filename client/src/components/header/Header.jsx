import './header.scss';
import '../../styles/components/_button.scss';

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        <h3>Tasks Manager</h3>
      </div>
      <div className="header__buttons">
        <button className="button">Sign In</button>
        <button className="button">Sign Out</button>
      </div>
    </nav>
  );
};

export default Header;
