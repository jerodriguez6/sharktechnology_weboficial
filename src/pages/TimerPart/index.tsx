import React, { useEffect, useState } from "react";
import {
  TimerPart, TimerTitle, TimeBody, TimeItem, TimeNum, TimeUnit
} from "./timer.style";
const TimerContainer = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-5-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)) < 10 ? '0' + Math.floor(difference / (1000 * 60 * 60 * 24)) : Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24) < 10 ? '0' + Math.floor((difference / (1000 * 60 * 60)) % 24) : Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60) < 10 ? '0' + Math.floor((difference / 1000 / 60) % 60) : Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60) < 10 ? '0' + Math.floor((difference / 1000) % 60) : Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents: any = [];

  Object.keys(timeLeft).forEach((interval: any) => {
    if (!timeLeft[interval]) {
      return;
    }
    //@ts-ignore
    timerComponents.push(<>{timeLeft[interval]}</>);
  });
  return (
    <>
    </>
  );
};
export default TimerContainer;
