import React from "react";
import styles from "./OrderSummary.module.css";

const OrderSummary = ({ deliveryDetails, setOrderSummary }) => {
  const { email, address, pincode, country, phoneNumber } = deliveryDetails;

  const deliveryInfo = [
    { name: "Email", value: email },
    { name: "Shipping Address", value: address },
    { name: "Shipping Pincode", value: pincode },
    { name: "Shipping Country", value: country },
    { name: "Phone Number", value: phoneNumber },
  ];

  const closeModal = () => {
    setOrderSummary(false);
  };

  const handleOrder = () => {
    /* Confirm order and send details to Backend */
    setOrderSummary(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img
          src={"/close.svg"}
          alt="Close order summary modal"
          className={styles.close}
          onClick={closeModal}
        />
        <div className={styles["modal-content"]}>
          <h2 className={styles.title}>Order Summary</h2>
          <div className={styles["details-delivery"]}>
            <h3 className={styles["sub-title"]}>Delivery Details</h3>
            <ul className={styles.infos}>
              {deliveryInfo.map((info, index) => (
                <li
                  key={info.name}
                  className={styles.info}
                  style={{
                    background: index % 2 !== 0 ? "hsla(200,23.81%,87.65%,0.5)" : "#fff",
                  }}
                >
                  <h5 className={styles["info-name"]}>{info.name}</h5>
                  <div className={styles["info-value"]}>{info.value}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["details-order"]}>
            <h3 className={styles["sub-title"]}>Order Details</h3>
            <table className={styles["order-table"]}>
              <thead>
                <tr className={styles["row-head"]}>
                  <th>S.No</th>
                  <th style={{ width: "60%" }}>Book Name</th>
                  <th>No. Of Copies</th>
                  <th>Unit Price</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <button className={styles["confirm-order"]} type="submit" onClick={handleOrder}>
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
