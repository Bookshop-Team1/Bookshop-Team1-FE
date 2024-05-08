import { useState } from "react";
import styles from "./Login.module.css";
import { useFormik } from "formik";
import { loginSchema } from "../schema/formSchema";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

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
            Should be atleast 8 characters with one special character and one capital alphabet
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
