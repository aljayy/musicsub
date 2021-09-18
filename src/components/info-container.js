import { useState } from "react";
import styles from "./info-container.module.css";
import music from "../images/icon-music.svg";

function Info() {
  const [payment, setPayment] = useState(false);
  const [cancel, setCancel] = useState(false);

  // function paymentHandler() {
  //   setTimeout(function () {
  //     setPayment(true);
  //   }, 300);
  // }

  // ${payment ? styles["payment-click"] : ""}

  return (
    <div className={styles.sub}>
      <div className={styles["sub-description"]}>
        <h2>Order Summary</h2>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <div className={styles["sub-info"]}>
        <div>
          <img src={music} alt="Music Image" />
        </div>
        <div>
          <h4>Annual plan</h4>
          <p>$59.99/year</p>
        </div>
        <a href="#">Change</a>
      </div>
      <div className={styles["btns-container"]}>
        <button className={`${styles.btn} ${styles["payment-btn"]}`}>
          Proceed to Payment
        </button>
        <button className={`${styles.btn} ${styles["cancel-btn"]}`}>
          Cancel Order
        </button>
      </div>
    </div>
  );
}

export default Info;
