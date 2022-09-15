import { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { viewDate } from "../../modules/viewDate";
import style from "./event.module.css";
import GoesNow from "./GoesNow";

const EventContent = ({ eventsSpisok }) => {
  const currenEventTime =
    Date.parse(eventsSpisok[0].dt_start) / 1000 > Math.floor(Date.now() / 1000)
      ? (Date.parse(eventsSpisok[0].dt_start) / 1000) %
        Math.floor(Date.now() / 1000)
      : 0;

  const [day, setDay] = useState(Math.floor(currenEventTime / 60 / 60 / 24));
  const [hour, setHour] = useState(Math.floor(currenEventTime / 60 / 60) % 24);
  const [minute, setMinute] = useState(Math.floor(currenEventTime / 60) % 60);
  const [second, setSecond] = useState(Math.floor(currenEventTime % 60));

  //Функция для подсчета оставшегося времени до эвента
  const mathTime = () => {
    let currenTime =
      Date.parse(eventsSpisok[0].dt_start) / 1000 >
      Math.floor(Date.now() / 1000)
        ? (Date.parse(eventsSpisok[0].dt_start) / 1000) %
          Math.floor(Date.now() / 1000)
        : 0;

    setDay(() => Math.floor(currenTime / 60 / 60 / 24) % 7);
    setHour(() => Math.floor(currenTime / 60 / 60) % 24);
    setMinute(() => Math.floor(currenTime / 60) % 60);
    setSecond(() => Math.floor(currenTime % 60));
  };
  useEffect(() => {
    const interval = setInterval(mathTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // подсчет процентов заполнения CircularProgressBar
  let dayProcent = (day / 7) * 100;
  let secondProcent = (second / 60) * 100;
  let minuteProcent = (minute / 60) * 100;
  let hourProcent = (hour / 24) * 100;

  return (
    <div className={style.mainContent}>
      <div className={style.eventDay}>{viewDate(eventsSpisok)}</div>
      <h3 className={style.eventName}>{eventsSpisok[0].title}</h3>
      {!currenEventTime ? (
        <GoesNow />
      ) : (
        <div className={style.circularBlocks}>
          <div className={style.circularBlock}>
            <CircularProgressbarWithChildren
              value={dayProcent}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "50px",
                pathTransitionDuration: 0.5,
                // функция для определения цвета заполнения бара в зависимости от процента
                pathColor: (function () {
                  if (dayProcent >= 100) {
                    return "#51ACD8";
                  }
                  if (dayProcent < 75 && dayProcent > 50) {
                    return "orange";
                  }
                  if (dayProcent <= 50) {
                    return "red";
                  }
                  return "#0062B5";
                })(),
                textColor: "#fff",
                trailColor: "#fff",
                backgroundColor: "#3e98c7",
              })}
            >
              <div className={style.circleContent}>
                <h3>{day}</h3>
                <span>дней</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className={style.circularBlock}>
            <CircularProgressbarWithChildren
              value={hourProcent}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "50px",
                pathTransitionDuration: 0.5,
                pathColor: (function () {
                  if (hourProcent >= 100) {
                    return "#51ACD8";
                  }
                  if (hourProcent < 75 && hourProcent > 50) {
                    return "orange";
                  }
                  if (hourProcent <= 50) {
                    return "red";
                  }
                  return "#0062B5";
                })(),
                textColor: "#fff",
                trailColor: "#fff",
                backgroundColor: "#3e98c7",
              })}
            >
              <div className={style.circleContent}>
                <h3>{hour}</h3>
                <span>часов</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className={style.circularBlock}>
            <CircularProgressbarWithChildren
              value={minuteProcent}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "50px",
                pathTransitionDuration: 0.5,
                pathColor: (function () {
                  if (minuteProcent >= 100) {
                    return "#51ACD8";
                  }
                  if (minuteProcent < 75 && minuteProcent > 50) {
                    return "orange";
                  }
                  if (minuteProcent <= 50) {
                    return "red";
                  }
                  return "#0062B5";
                })(),
                textColor: "#fff",
                trailColor: "#fff",
                backgroundColor: "#3e98c7",
              })}
            >
              <div className={style.circleContent}>
                <h3>{minute}</h3>
                <span>минут</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className={style.circularBlock}>
            <CircularProgressbarWithChildren
              value={secondProcent}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "50px",
                pathTransitionDuration: 0.5,
                pathColor: (function () {
                  if (secondProcent >= 100) {
                    return "#51ACD8";
                  }
                  if (secondProcent < 75 && secondProcent > 50) {
                    return "orange";
                  }
                  if (secondProcent <= 50) {
                    return "red";
                  }

                  return "#0062B5";
                })(),
                textColor: "#fff",
                trailColor: "#fff",
                backgroundColor: "#3e98c7",
              })}
            >
              <div className={style.circleContent}>
                <h3>{second}</h3>
                <span>секунд</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(EventContent);
