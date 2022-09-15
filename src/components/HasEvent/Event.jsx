import React from "react";
import EventContent from "./EventContent";
import EventFooter from "./EventFooter";
import Time from "./Time";

const Event = (state) => {
  return (
    <div style={{ width: "100%", heigth: "100%" }}>
      <Time />
      <EventContent state={state} />
      {state[1].length && <EventFooter state={state} />}
    </div>
  );
};

export default Event;
