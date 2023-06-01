import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { calculeteDiff } from './utils';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};
export default function Countdown({ date }) {
  const [timeInMs, setTimeInMs] = useState(date.getTime());
  const [remainingTime, setRemainingTime] = useState();
  useEffect(() => {
    setTimeInMs(date.getTime), [date];
  });
  const dateImMs = date.getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(timeInMs);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeInMs]);
  const updateRemainingTime = (timeInMs) => {
    setRemainingTime(calculeteDiff(timeInMs));
  };
  return (
    <div className={styles.countdown}>
      <span>1</span>
      <span>2</span>
      <b>:</b>
      <span>4</span>
      <span>5</span>
      <b>:</b>
      <span>1</span>
      <span>0</span>
      <span>{dateImMs}</span>
    </div>
  );
}
