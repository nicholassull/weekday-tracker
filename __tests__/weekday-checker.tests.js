import {dayNumber} from '../src/js/weekday-checker.js'

describe('dayNumber', () => {

  test('should return the day of the week for the date given', () => {
    let newDate = "December 21, 2021";
    expect(dayNumber(newDate)).toEqual("Tuesday");
  });
  test('should return the day of the week for the date given', () => {
    let newDate = "January 18, 2023";
    expect(dayNumber(newDate)).toEqual("Wednesday");
  });
  test('should return "Please, enter a valid date" when the date is invalid', () => {
    let newDate = "January 38, 700";
    expect(dayNumber(newDate)).toEqual("Please, enter a valid date");
  });
});