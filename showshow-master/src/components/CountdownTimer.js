import React, { useState, useEffect } from 'react';


const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
        months: Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    } else if (!isActive && timeLeft !== calculateTimeLeft()) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, targetDate]);

  const startTimer = () => setIsActive(true);
  const stopTimer = () => setIsActive(false);
  const resetTimer = () => {
    setTimeLeft(calculateTimeLeft());
    setIsActive(false);
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="timer-container">
      <div>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <div className="timer-buttons">
        <button onClick={startTimer}>시작</button>
        <button onClick={stopTimer}>멈춤</button>
        <button onClick={resetTimer}>초기화</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
