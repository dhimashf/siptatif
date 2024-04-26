import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="headerlogin">
        <div className="container">
          <h1>SIPTATIF</h1>
        </div>

        <div className="login-container">
          <h2>Silahkan Login</h2>
          <form action="#">
            <div className="form-grouplogin">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-grouplogin">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="forgot-password">
              <Link to="/lupapassword">Forgot Password ?</Link>
            </div>
            <Link to="/home"> {/* Ganti "/home" dengan rute yang sesuai dengan halaman utama Anda */}
              <button type="button">Login</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
