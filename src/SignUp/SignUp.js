import { useState } from "react";
import styles from "./SignUp.module.css";
import { useFormik } from "formik";
import { signupSchema } from "../schema/formSchema";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: handleSubmit,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles["group-name"]}>
        <div className={styles.name}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className={styles.input}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <span className={styles.error}>Name must be not empty</span>
        ) : null}
      </div>
      <div className={styles["group-username"]}>
        <div className={styles.username}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            placeholder="Enter your username"
            className={styles.input}
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.userName && formik.errors.userName ? (
          <span className={styles.error}>Username must be not empty</span>
        ) : null}
      </div>
      <div className={styles["group-number"]}>
        <div className={styles.number}>
          <label htmlFor="number" className={styles.label}>
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            className={styles.input}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <span className={styles.error}>Phone number must be of 10 digits</span>
        ) : null}
      </div>
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
            onClick={handlePasswordToggle}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <span className={styles.error}>
            Should be at least 8 characters with one special character and one capital alphabet
          </span>
        ) : null}
      </div>
      <div className={styles["group-confirm-password"]}>
        <div className={styles["confirm-password"]}>
          <label htmlFor="confirm-password" className={styles.label}>
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            className={styles.input}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <img
            src={showConfirmPassword ? "/hide.svg" : "/show.svg"}
            alt="Show confirm password"
            className={styles.icon}
            onClick={handleConfirmPasswordToggle}
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <span className={styles.error}>Should match with password</span>
        ) : null}
      </div>
      <div className={styles.cta}>
        <button type="submit" className={styles["sign-up-btn"]}>
          Sign Up
        </button>
        <div className={styles["login"]}>
          <span className={styles["helper-text"]}>Already have an account? </span>
          <Link to="/login" className={styles["login-btn"]}>
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
