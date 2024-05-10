import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./PurchaseBook.module.css";
// import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { deliverySchema } from "../schema/formSchema";
import OrderSummary from "../OrderSummary/OrderSummary";

const PurchaseBook = () => {
  /* const { id } = useParams(); ID which will be used to fetch details from API */
  const [orderSummary, setOrderSummary] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({});

  const handleSubmit = (values, { resetForm }) => {
    setOrderSummary(true);
    setDeliveryDetails(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      address: "",
      pincode: "",
      country: "",
      phoneNumber: "",
    },
    validationSchema: deliverySchema,
    onSubmit: handleSubmit,
  });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Enter Delivery Details</h2>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.group}>
          <div className={styles.email}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
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
        <div className={styles.group}>
          <div className={styles.address}>
            <label htmlFor="address" className={styles.label}>
              Address
            </label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your address"
              className={styles["text-area"]}
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.address && formik.errors.address ? (
            <span className={styles.error}>Address should not be empty</span>
          ) : null}
        </div>
        <div className={styles.group}>
          <div className={styles.pincode}>
            <label htmlFor="pincode" className={styles.label}>
              Pincode
            </label>
            <input
              id="pincode"
              name="pincode"
              type="number"
              placeholder="Enter your pincode"
              className={styles.input}
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.pincode && formik.errors.pincode ? (
            <span className={styles.error}>Pincode must be of 6 digits</span>
          ) : null}
        </div>
        <div className={styles.group}>
          <div className={styles.country}>
            <label htmlFor="country" className={styles.label}>
              Country
            </label>
            <select
              id="country"
              name="country"
              className={styles.select}
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option className={styles.option} value="">
                Select your country
              </option>
              <option className={styles.option} value="India">
                India
              </option>
              <option className={styles.option} value="USA">
                USA
              </option>
            </select>
          </div>
          {formik.touched.country && formik.errors.country ? (
            <span className={styles.error}>Country should not be empty</span>
          ) : null}
        </div>
        <div className={styles.group}>
          <div className={styles.number}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Phone Number
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="number"
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
        <button className={styles["view-summary"]} type="submit">
          View Order summary
        </button>
      </form>
      {orderSummary &&
        createPortal(
          <OrderSummary deliveryDetails={deliveryDetails} setOrderSummary={setOrderSummary} />,
          document.getElementById("order-summary"),
        )}
    </section>
  );
};

export default PurchaseBook;
