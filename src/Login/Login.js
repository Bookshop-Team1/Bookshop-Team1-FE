import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div>
      <form>
        <div className="group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={values.email}
            placeholder="abc@xyz.com"
            onChange={handleValues}
          />
          <span id="error">{errors.email}</span>
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={values.password}
            placeholder="Password"
            onChange={handleValues}
          />
          {/* <button type="button" onClick={() => setShowPassword((prevPassword) => !prevPassword)}>
            Show Password
          </button> */}
          <span id="error">{errors.password}</span>
        </div>
        <div>
          <button type="submit" className="login">
            Login
          </button>
          <div>
            <span>Not have an account? </span>
            <Link to="/sign-up"> Sign Up</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
