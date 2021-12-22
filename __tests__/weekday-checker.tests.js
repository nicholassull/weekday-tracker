import {dayNumber} from '../src/js/weekday-checker.js'

describe('dayNumber', () => {
  test('should return the number value of the day of the week.', () => {
    let newDate = "December 21, 2021";
    expect(dayNumber(newDate)).toEqual(2);
  });
});






// describe('Date', () => {
//   test('should create a new Date object', () => {
//     const date = new Date('1995, 07, 02');
//     expect(date).toEqual(1995, 07, 02);
//   });
// });

//new Date(year, monthIndex, day)

// Wed Sep 01 1999 00:00:00 GMT-0700 (Pacific Daylight Time)


// import Triangle from './../src/triangle.js';

// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
// });


// new Date()
// new Date(value)
// new Date(dateString)
// new Date(dateObject)

// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
