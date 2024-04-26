import React from 'react';
import './LupaPassword.css'; // Import CSS file
import { Link } from 'react-router-dom'; // Import Link component

function LupaPassword() {
  return (
    <div className="headerlogin">
      <div className="containerlogin">
        <h1>SIPTATIF</h1>
      </div>
      <div className="login-container">
        <h2>Reset Password</h2>
        <form action="#">
          <div className="form-grouplogin">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" />
          </div>
          <Link to="#">
            <button type="button">Send</button>
          </Link>
          <Link to="/">
            <button type="button">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LupaPassword;