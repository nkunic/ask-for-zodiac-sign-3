// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

/* Day of birth */
let birthDayPlace = document.getElementById('birthDayPlace');
let birthDayValue = prompt('Enter your day of birth:');
console.log(birthDayValue);
if (birthDayValue != null) {
  birthDayPlace.innerText = birthDayValue;
}

/* Month of birth */
let birthMmonthPlace = document.getElementById('birthMmonthPlace');
let birthMonthValue = prompt(
  'Enter your month of birth: ' +
    'January, February, March, April, May, June, July, August, September, October, November or December'
);
console.log(birthMonthValue);
if (birthMonthValue != null) {
  birthMmonthPlace.innerText = birthMonthValue;
}

// Function to determine Zodiac sign
function zodiacSign(birthDayValue, birthMonthValue) {

  let astroSignPlace = document.getElementById('astroSignPlace');
  let astroSignValue = '';

  // Checks month and date within the valid range of a specified zodiac
  if (birthMonthValue == 'December') {
    if (birthDayValue < 22) {
      astroSignValue = 'Sagittarius';
    } else {
      astroSignValue = 'Capricorn';
    }
  } else if (birthMonthValue == 'January') {
    if (birthDayValue < 20) {
      astroSignValue = 'Capricorn';
    } else {
      astroSignValue = 'Aquarius';
    }
  } else if (birthMonthValue == 'February') {
    if (birthDayValue < 19) {
      astroSignValue = 'Aquarius';
    } else {
      astroSignValue = 'Pisces';
    }
  } else if (birthMonthValue == 'March') {
    if (birthDayValue < 21) {
      astroSignValue = 'Pisces';
    } else {
      astroSignValue = 'Aries';
    }
  } else if (birthMonthValue == 'April') {
    if (birthDayValue < 20) {
      astroSignValue = 'Aries';
    } else {
      astroSignValue = 'Taurus';
    }
  } else if (birthMonthValue == 'May') {
    if (birthDayValue < 21) {
      astroSignValue = 'Taurus';
    } else {
      astroSignValue = 'Gemini';
    }
  } else if (birthMonthValue == 'June') {
    if (birthDayValue < 21) {
      astroSignValue = 'Gemini';
    } else {
      astroSignValue = 'Cancer';
    }
  } else if (birthMonthValue == 'July') {
    if (birthDayValue < 23) {
      astroSignValue = 'Cancer';
    } else {
      astroSignValue = 'Leo';
    }
  } else if (birthMonthValue == 'August') {
    if (birthDayValue < 23) {
      astroSignValue = 'Leo';
    } else {
      astroSignValue = 'Virgo';
    }
  } else if (birthMonthValue == 'September') {
    if (birthDayValue < 23) {
      astroSignValue = 'Virgo';
    } else {
      astroSignValue = 'Libra';
    }
  } else if (birthMonthValue == 'October') {
    if (birthDayValue < 23) {
      astroSignValue = 'Libra';
    } else {
      astroSignValue = 'Scorpio';
    }
  } else if (birthMonthValue == 'November') {
    if (birthDayValue < 22) {
      astroSignValue = 'Scorpio';
    } else {
      astroSignValue = 'Sagittarius';
    }
  }
  if (astroSignValue != null) {
    astroSignPlace.innerText = astroSignValue;
  }
  console.log(astroSignValue);
}


zodiacSign(birthDayValue, birthMonthValue);