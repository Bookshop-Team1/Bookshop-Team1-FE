import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Not Found</h1>
      <p className={styles.message}>The page you are looking for does not exist.</p>
      <Link to="/" className={styles.link}>
        Go to Home Page
      </Link>
    </div>
  );
};

export default Page404;
