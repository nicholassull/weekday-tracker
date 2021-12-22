// Date.prototype.getUTCDay()

// const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');

export const dayNumber = (date) => {
  let date1 = new Date (date);
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const i = date1.getDay();
  if (weekdays[i] === undefined) {
    return "Please, enter a valid date";
    } else {
    return weekdays[i];
  }
};