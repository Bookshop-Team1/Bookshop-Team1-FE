import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleValues = (e) => {
    setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email-text">Email</label>
          <input
            id="email-text"
            type="text"
            value={values.email}
            placeholder="abc@xyz.com"
            name="email"
            onChange={handleValues}
          />
          <p id="email-error">{errors.email}</p>
        </div>
        <div>
          <label htmlFor="password-text">Password</label>
          <input
            id="password-text"
            type={showPassword ? "text" : "password"}
            value={values.password}
            placeholder="Password"
            name="password"
            onChange={handleValues}
          />
          <button type="button" onClick={() => setShowPassword((prevPassword) => !prevPassword)}>
            Show Password
          </button>
          <p id="password-error">{errors.password}</p>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <div>
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
