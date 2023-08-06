import React from 'react';

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Perform login logic here (e.g., authentication, API call, etc.)
    // Replace this with your actual login implementation

    // For this example, we are simply logging the values to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear form fields after submission (optional)
    event.target.reset();
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
            <input type="email" id="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />

            <button type="submit">Login</button>
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
