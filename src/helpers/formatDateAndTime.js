export default function formatDateAndTime(date, time) {
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);

  return `${formattedDate} at ${formattedTime}`;
}

const formatDate = (date) => {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};

const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;
  const period = isPM ? 'pm' : 'am';

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  return minutes > 0 ? `${hours}.${minutes}${period}` : `${hours}${period}`;
};
