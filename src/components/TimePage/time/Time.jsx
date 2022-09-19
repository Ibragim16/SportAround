import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";
import Days from "./Days";
import Hours from "./Hours";
import styles from "./time.module.css";
const Time = () => {
  const { loadingFetch } = useSelector((state) => state.reducer);
  return (
    <div className={styles.block}>
      <Hours />
      <Days />
      {loadingFetch && (
        <div className={styles.loaderBox}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Time;
