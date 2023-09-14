import './registration.scss';
import '../../styles/components/_button.scss';

const Signup = () => {
  return (
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">
          <form className="form">
            <div className="form-group">
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <button className="button">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
