import { useState } from "react";
import styles from "./Login.module.css";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";
import { loginSchema } from "../schema/formSchema";
import { Link } from "react-router-dom";
import { SIGNUP_ENDPOINT, LOGGED_IN_USER_INFO, BOOKS_ENDPOINT } from "../constants";
import baseApi from "../BaseApi";
import { setValueToLocalStorage } from "../services/localStorage";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    loginUser(values);
    resetForm();
    navigate(BOOKS_ENDPOINT);
  };

  async function loginUser(values) {
    const request = {
      username: values.email,
      password: values.password,
    };
    const response = await baseApi.authenticate("/users/authenticate", request);
    setValueToLocalStorage(LOGGED_IN_USER_INFO, response.data?.token);
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  // Need to add this (Do not remove this code)
  // if (isLogin()) {
  //   return <Navigate to={getFromLocalStorage(PATH_KEY) || "/"} />;
  // }

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles["group-email"]}>
        <div className={styles.email}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            className={styles.input}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <span className={styles.error}>Should follow the pattern abc@xyz.com</span>
        ) : null}
      </div>
      <div className={styles["group-password"]}>
        <div className={styles.password}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className={styles.input}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <img
            src={showPassword ? "/hide.svg" : "/show.svg"}
            alt="Show password"
            className={styles.icon}
            onClick={handleToggle}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <span className={styles.error}>
            Should be atleast 8 characters with digits, one special character and one capital
            alphabet
          </span>
        ) : null}
      </div>
      <div className={styles.cta}>
        <button type="submit" className={styles["login-btn"]}>
          Login
        </button>
        <div className={styles["sign-up"]}>
          <span className={styles["helper-text"]}>Not have an account? </span>
          <Link to={SIGNUP_ENDPOINT} className={styles["sign-up-btn"]}>
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
