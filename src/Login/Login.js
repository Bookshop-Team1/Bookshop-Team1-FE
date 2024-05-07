import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [showPassword, setShowPassword] = useState(false);

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["group-email"]}>
        <label htmlFor="email" className={styles.label}>
          Email*
        </label>
        <input
          id="email"
          type="text"
          name="email"
          className={styles.input}
          value={values.email}
          placeholder="Enter your email"
          onChange={handleValues}
        />
        {errors.email ? (
          <span className={styles.error}>*Should follow the pattern abc@xyz.com</span>
        ) : null}
      </div>
      <div className={styles["group-password"]}>
        <label htmlFor="password" className={styles.label}>
          Password*
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          className={styles.input}
          value={values.password}
          placeholder="Enter your password"
          onChange={handleValues}
        />
        <img
          src={showPassword ? "/hide.svg" : "/show.svg"}
          alt="Show password"
          className={styles.icon}
          onClick={handleToggle}
        />
        {errors.password ? (
          <span className={styles.error}>
            *Should be atleast 8 characters with one special character and one capital alphabet
          </span>
        ) : null}
      </div>
      <div className={styles.cta}>
        <button type="submit" className={styles["login-btn"]}>
          Login
        </button>
        <div className={styles["sign-up"]}>
          <span className={styles["helper-text"]}>Not have an account? </span>
          <Link to="/sign-up" className={styles["sign-up-btn"]}>
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
