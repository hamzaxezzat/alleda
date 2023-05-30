import dayjs from 'dayjs';
export function calculeteDiff(timeInMs) {
  const timestampDayjs = dayjs(timeInMs);
  const nowDayjs = dayjs();
  return console.log('*****', timestampDayjs);

  if (timestampDayjs.isBefore(nowDayjs)) {
    return {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: '00',
    };
  }
  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
  console.log(timestampDayjs);
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
  return seconds;
}
function getRemainingMinutes(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
  return minutes;
}
function getRemainingHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 60;
  return hours;
}
function getRemainingDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, 'days');
  return days;
}
