// Date.prototype.getUTCDay()

// const date1 = new Date('August 19, 1975 23:15:30 GMT+11:00');

export const dayNumber = (date) => {
  let date1 = new Date (date);
  return date1.getDay();
};

