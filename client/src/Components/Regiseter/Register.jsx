import React, { useState } from "react";
import axios from 'axios';
import { User, Calendar, Mail, Lock } from "lucide-react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        // await axios.post('http://localhoat:5000/register',formData);
        // if(res===200){
        //     alert('Registered successfully');
        // }
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="register-wrapper">
      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="input-group">
          <User className="input-icon" size={18} />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <Calendar className="input-icon" size={18} />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <Mail className="input-icon" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <button className="btn-primary" type="submit">
          Register
        </button>

        <div className="already-registered">
          Already registered? <a href="#">Login here</a>
        </div>
      </form>
    </div>
  );
}

export default Register;
