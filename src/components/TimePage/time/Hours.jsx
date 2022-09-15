import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./time.module.css";

const Hours = () => {
  const options = {
    hour: "numeric",
    minute: "numeric",
  };

  const [time, setTime] = useState(new Date().toLocaleString("ru-RU", options));
  const timeCurrent = useCallback(() => {
    setTime(() => new Date().toLocaleString("ru-RU", options));
  }, []);
  useEffect(() => {
    const interval = setInterval(timeCurrent, 1000);
    return () => clearInterval(interval);
  }, [timeCurrent]);

  return (
    <div className={styles.HoursMain}>
      <div className={styles.hours}>
        <h3>{time}</h3>
      </div>
    </div>
  );
};

export default React.memo(Hours);
