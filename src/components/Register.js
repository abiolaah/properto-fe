import React from 'react';

const Register = () => {
  const handleRegistration = (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const fullName = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target['confirm-password'].value;

    // Perform registration logic here (e.g., API call to create an account)
    // Replace this with your actual registration implementation

    // For this example, we are simply logging the values to the console
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

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
        <div className="registration-container">
          <h2>Create Your Account</h2>
          <form className="registration-form" onSubmit={handleRegistration}>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" required />

            <button type="submit">Register</button>
          </form>
        </div>

        {/* Link back to the Login Page */}
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>

      <footer>
        <p>Contact us at: contact@reland.com</p>
      </footer>
    </div>
  );
};

export default Register;
