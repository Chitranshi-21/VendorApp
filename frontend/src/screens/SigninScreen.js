import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const userSignin = useSelector(state => state.userSignin);
   const {loading, userInfo, error} = userSignin;
   const dispatch = useDispatch();

  useEffect(() => {
   if (userInfo)
     props.history.push("/");
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(signin(email, password));
  }

  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Distributor Sign-In</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          Not Registered?
        </li>
        <li>
          <Link to="/register" className="button">Create your Distributor account</Link>
        </li>
        <li>
         Vendor Account SignIn?
        </li>
        <li>
          <Link to="/vendorSignin" className="button">Click Here</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default SigninScreen;