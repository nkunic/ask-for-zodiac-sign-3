// Import stylesheets
import './style.css';

// Write Javascript code!

/* Day of birth */
var birthDay = document.querySelector('#birthDay');
var birthDayValue = prompt('Enter your day of birth!');
console.log(birthDayValue);
birthDay.innerText = birthDayValue;

/* Month of birth */
var birthMmonth = document.querySelector('#birthMmonth');
var birthDayValue = prompt('Enter your month of birth:' + "");
console.log(birthMonthValue);
birthMmonth.innerText = birthMonthValue;

// Function to determine Zodiac sign
function zodiacSign(birthDayValue, birthMonthValue) {
  let astroSign = '';

  // Checks month and date within the valid range of a specified zodiac
  if (birthMonthValue == 'December') {
    if (birthDayValue < 22) {
      astroSign = 'Sagittarius';
    } else {
      astroSign = 'Capricorn';
    }
  } else if (birthMonthValue == 'January') {
    if (birthDayValue < 20) {
      astroSign = 'Capricorn';
    } else {
      astroSign = 'Aquarius';
    }
  } else if (birthMonthValue == 'February') {
    if (birthDayValue < 19) {
      astroSign = 'Aquarius';
    } else {
      astroSign = 'Pisces';
    }
  } else if (birthMonthValue == 'March') {
    if (birthDayValue < 21) {
      astroSign = 'Pisces';
    } else {
      astroSign = 'Aries';
    }
  } else if (birthMonthValue == 'April') {
    if (birthDayValue < 20) {
      astroSign = 'Aries';
    } else {
      astroSign = 'Taurus';
    }
  } else if (birthMonthValue == 'May') {
    if (birthDayValue < 21) {
      astroSign = 'Taurus';
    } else {
      astroSign = 'Gemini';
    }
  } else if (birthMonthValue == 'June') {
    if (birthDayValue < 21) {
      astroSign = 'Gemini';
    } else {
      astroSign = 'Cancer';
    }
  } else if (birthMonthValue == 'July') {
    if (birthDayValue < 23) {
      astroSign = 'Cancer';
    } else {
      astroSign = 'Leo';
    }
  } else if (birthMonthValue == 'August') {
    if (birthDayValue < 23) {
      astroSign = 'Leo';
    } else {
      astroSign = 'Virgo';
    }
  } else if (birthMonthValue == 'September') {
    if (birthDayValue < 23) {
      astroSign = 'Virgo';
    } else {
      astroSign = 'Libra';
    }
  } else if (birthMonthValue == 'October') {
    if (birthDayValue < 23) {
      astroSign = 'Libra';
    } else {
      astroSign = 'Scorpio';
    }
  } else if (birthMonthValue == 'November') {
    if (birthDayValue < 22) {
      astroSign = 'Scorpio';
    } else {
      astroSign = 'Sagittarius';
    }
  }
}

// Driver Code
let day = 4;
let birthMonthValue = 'August';
zodiacSign(birthDayValue, birthMonthValue);
//document.write(astroSign);