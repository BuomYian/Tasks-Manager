import './registration.scss';
import '../../styles/components/_button.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice.js';

const Signup = () => {
  const dispatch = useDispatch;
  const [state, setState] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleSubmit = (e) => {
    e.prevetDefault();

    dispatch(
      register({
        username: state.username,
        password: state.password,
        email: state.email,
      })
    );
  };
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  console.log(state.email, state.username, state.password);
  return (
    <div>
      <div className="signup-form">
        <div className="signup-form__wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h4>Sign up</h4>
            <br />
            <div className="form-group">
              <input
                type="text"
                name="username"
                value={state.username}
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={state.email}
                id=""
                placeholder="Enter Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={state.password}
                id=""
                placeholder="Enter password"
                onChange={handleChange}
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
