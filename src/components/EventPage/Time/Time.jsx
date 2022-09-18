import React, { useCallback, useEffect, useState } from "react";
import styles from "./time.module.css";
const Time = () => {
  const date = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
  };
  const [time, setTime] = useState(date.toLocaleString("ru-RU", options));
  const [day, setDay] = useState(
    `${date.getDate()} ${date.toLocaleString("ru-RU", {
      month: "long",
    })}·${date.toLocaleString("ru-RU", { weekday: "long" })}`
  );

  const timeCurrent = useCallback(() => {
    setTime(() => new Date().toLocaleString("ru-RU", options));
    setDay(
      () =>
        `${new Date().getDate()} ${new Date().toLocaleString("ru-RU", {
          month: "long",
        })}·${new Date().toLocaleString("ru-RU", { weekday: "long" })}`
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(timeCurrent, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.Time}>
      <div className={styles.HoursMain}>
        <div className={styles.hours}>
          <h3>{time}</h3>
        </div>
        <div className={styles.Date}>{day}</div>
      </div>
    </div>
  );
};

export default React.memo(Time);
