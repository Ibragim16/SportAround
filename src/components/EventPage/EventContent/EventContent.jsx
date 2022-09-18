import { memo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { viewDate } from "../../../modules/viewDate";
import style from "./eventContent.module.css";
import GoesNow from "../GoesNowModal";
import ProgressBar from "../ProgressBar/ProgressBar";

const EventContent = ({ eventsSpisok }) => {
  const currenEventTime =
    Date.parse(eventsSpisok[0]?.dt_start) / 1000 > Math.floor(Date.now() / 1000)
      ? (Date.parse(eventsSpisok[0]?.dt_start) / 1000) %
        Math.floor(Date.now() / 1000)
      : 0;

  const [day, setDay] = useState(Math.floor(currenEventTime / 60 / 60 / 24));
  const [hour, setHour] = useState(Math.floor(currenEventTime / 60 / 60) % 24);
  const [minute, setMinute] = useState(Math.floor(currenEventTime / 60) % 60);
  const [second, setSecond] = useState(Math.floor(currenEventTime % 60));

  //Функция для подсчета оставшегося времени до эвента
  const mathTime = () => {
    let currenTime =
      Date.parse(eventsSpisok[0]?.dt_start) / 1000 >
      Math.floor(Date.now() / 1000)
        ? (Date.parse(eventsSpisok[0]?.dt_start) / 1000) %
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
  let array = [
    { type: "дней", time: day, procent: dayProcent },
    { type: "часов", time: hour, procent: hourProcent },
    { type: "минут", time: minute, procent: minuteProcent },
    { type: "секунд", time: second, procent: secondProcent },
  ];
  return (
    <div className={style.mainContent}>
      <div className={style.eventDay}>{viewDate(eventsSpisok)}</div>
      <h3 className={style.eventName}>{eventsSpisok[0].title}</h3>
      {!currenEventTime ? (
        <GoesNow />
      ) : (
        <div className={style.circularBlocks}>
          {array.map((item, ind) => {
            return (
              <div key={ind} className={style.circularBlock}>
                <ProgressBar props={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default memo(EventContent);
