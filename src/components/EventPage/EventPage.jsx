import React from "react";
import EventContent from "./EventContent";
import EventFooter from "./EventFooter/EventFooter";
import Time from "./Time";
import styles from "./event.module.css";
const Event = ({eventsSpisok}) => {
  return (
    <div className={styles.EventMain}>
      <Time />
      <EventContent eventsSpisok={eventsSpisok} />
      {eventsSpisok[1] && <EventFooter eventsSpisok={eventsSpisok} />}
    </div>
  );
};

export default React.memo(Event);
