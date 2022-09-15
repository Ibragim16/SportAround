import React from "react";
import EventContent from "./EventContent";
import EventFooter from "./EventFooter/EventFooter";
import Time from "./Time";
import styles from "./event.module.css";
const Event = (state) => {
  return (
    <div className={styles.EventMain}>
      <Time />
      <EventContent state={state} />
      {state[1].length && <EventFooter state={state} />}
    </div>
  );
};

export default React.memo(Event);
