import React from 'react'
const { useState, useEffect } = React;

const TimeCountDown = () => {
  const [countdownDate] = useState(new Date('2025-07-26').getTime());
  const [state, setState] = useState({
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  useEffect(() => {
    clearInterval(setNewTime);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div>
      <div className='countdown-wrapper'>
        <div className='time-section'>
          <div className='time'>{state.days || '0'}</div>
          <small className="time-text">Dnů</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.hours || '00'}</div>
          <small className="time-text">Hodin</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.minutes || '00'}</div>
          <small className="time-text">Minut</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.seconds || '00'}</div>
          <small className="time-text">Vteřin</small>
        </div>
      </div>
    </div>
  );
};

export default TimeCountDown;

