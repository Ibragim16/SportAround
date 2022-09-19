import React from "react";
import { viewDate } from "../../../modules/viewDate";
import styles from "./eventFooter.module.css";

const EventFooter = ({ eventsSpisok }) => {
  return (
    <div className={styles.EventFooter}>
      <div className={styles.eventDay}>{viewDate(eventsSpisok[1])}</div>
      <div className={styles.nextEventName}>{eventsSpisok[1].title}</div>
    </div>
  );
};

export default React.memo(EventFooter);
