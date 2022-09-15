import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import styles from "./time.module.css";

const Days = () => {
  const date = new Date();
  const [day, setDay] = useState(
    `${date.getDate()} ${date.toLocaleString("ru-RU", {
      month: "long",
    })} ${date.toLocaleString("ru-RU", { weekday: "long" })}`
  );
  const timeCurrent = useCallback(() => {
    setDay(
      () =>
        `${new Date().getDate()} ${new Date().toLocaleString("ru-RU", {
          month: "long",
        })} ${new Date().toLocaleString("ru-RU", { weekday: "long" })}`
    );
  }, []);
  useEffect(() => {
    const interval = setInterval(timeCurrent, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.DaysMain}>
      <div className={styles.days}>
        <h3>{day}</h3>
      </div>
    </div>
  );
};

export default React.memo(Days);
