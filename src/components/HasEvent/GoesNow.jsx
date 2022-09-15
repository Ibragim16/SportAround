import React from "react";
import styles from "./event.module.css";

const GoesNow = () => {
  return (
    <div className={styles.GoesNow}>
      <span>ИДЁТ СЕЙЧАС</span>
      <span className={styles.timeIcon}>
        <img
          src="https://cdn-user-icons.flaticon.com/73390/73390067/1662970399015.svg?token=exp=1662971309~hmac=41d635189f3219327a1de019d73742dc"
          alt=""
        />
      </span>
    </div>
  );
};

export default GoesNow;
