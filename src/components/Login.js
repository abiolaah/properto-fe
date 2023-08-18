import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const history = useNavigate();
  const handleLogin = (event) => {
  history("/home");    

  };

  return (
    <div>
      <header>
        <h1>Reland Solution</h1>
        <p>Property Management</p>
      </header>
      <div className="container">
        <div className="login-container">
          <h2>Login to Your Account</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email"  />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password"  />

            <button type="submit" onClick={handleLogin}>Login</button>
          </form>
        </div>

        {/* Link back to the Home Page */}
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>

      <footer>
        <p>Contact us at: contact@reland.com</p>
      </footer>
    </div>
  );
};

export default Login;
