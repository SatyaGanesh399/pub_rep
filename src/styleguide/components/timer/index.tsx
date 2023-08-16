import React, { LegacyRef } from "react";
import classNames from "classnames";
import Countdown from "react-countdown";

import css from "./index.module.scss";

type TimerProps = {
  time: number[]; //[hh, mm, ss]
  onCompletion: Function;
  start: boolean;
  timerRef: LegacyRef<Countdown>;
  className?: string;
};
const Timer = ({ time, onCompletion, timerRef, className }: TimerProps) => {
  return (
    <>
      <Countdown
        ref={timerRef}
        autoStart={false}
        date={Date.now() + time[0] * 3600000 + time[1] * 60000 + time[2] * 1000}
        onComplete={() => onCompletion()}
        renderer={({ hours, minutes, seconds }) => {
          return (
            <div className={classNames(className, css.timerContainer)}>
              <span>Time Left -- </span>
              <span>
                {hours === 0
                  ? `${minutes} Mins : ${seconds} Secs`
                  : `${hours} Hrs : ${minutes} Mins : ${seconds} Secs`}
              </span>
            </div>
          );
        }}
      />
    </>
  );
};

export default Timer;
