import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import styles from "./progressBar.module.css";
const ProgressBar = ({ props }) => {
  return (
    <div>
      <CircularProgressbarWithChildren
        value={props.procent}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: "butt",
          textSize: "50px",
          pathTransitionDuration: 0.5,
          // функция для определения цвета заполнения бара в зависимости от процента
          pathColor: (function () {
            if (props.procent >= 100) {
              return "#51ACD8";
            }
            if (props.procent < 75 && props.procent > 50) {
              return "#fdae47";
            }
            if (props.procent <= 50) {
              return "#d62f0d ";
            }
            return "#0062B5";
          })(),
          textColor: "#fff",
          trailColor: "none",
          backgroundColor: "#3e98c7",
        })}
      >
        <div className={styles.circleContent}>
          <h3>{props.time}</h3>
          <span>{props.type}</span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default React.memo(ProgressBar);
