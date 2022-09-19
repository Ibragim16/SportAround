import React from "react";
import Time from "./time/Time";
import styles from "./timePage.module.css";
const TimePage = () => {
  return (
    <div className={styles.Main}>
      <Time />
    </div>
  );
};

export default React.memo(TimePage);
