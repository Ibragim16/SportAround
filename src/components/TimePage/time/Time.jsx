import React from "react";
import Days from "./Days";
import Hours from "./Hours";
import styles from "./time.module.css";
const Time = () => {
  return (
    <div className={styles.block}>
      <Hours />
      <Days />
    </div>
  );
};

export default Time;
