import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import "./Login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(credentials);
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>

        <div className="input-group">
          <Mail className="input-icon" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <Lock className="input-icon" size={18} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <button className="btn-primary" type="submit">
          Login
        </button>

        <div className="not-registered">
          New user? <a href="/register">Register here</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
