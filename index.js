// Import stylesheets
import './style.css';

// Write Javascript code!

// Function to calculate sum digits of n
function zodiacSign(day, month) {

  let astroSign="";
      
  // Checks month and date within the valid range of a specified zodiac
  if (month == "december"){      
    if (day < 22) {
      astroSign = "Sagittarius";
    } else {
      astroSign ="Capricorn";
    }
  }
          
  else if (month == "January"){
    if (day < 20) {
      astroSign = "Capricorn";
    } else {
      astroSign ="Aquarius";
    }    
  }
          
  else if (month == "February"){
    if (day < 19) {
      astroSign = "Aquarius";
    } else {
      astroSign ="Pisces";
    }
  }
          
  else if(month == "March"){
    if (day < 21) {
      astroSign = "Pisces";
    } else {
      astroSign ="Aries";
    }
  }
  else if (month == "April"){
    if (day < 20) {
      astroSign = "Aries";
    } else {
      astroSign ="Taurus";
    }
  }
          
  else if (month == "May"){
    if (day < 21) {
      astroSign = "Taurus";
    } else {
      astroSign ="Gemini";
    }
  }
          
  else if( month == "June"){
    if (day < 21) {
      astroSign = "Gemini";
    } else {
      astroSign ="Cancer";
    }
  }
          
  else if (month == "July"){
    if (day < 23) {
      astroSign = "Cancer";
    } else {
      astroSign ="Leo";
    }
  }
          
  else if( month == "August"){
    if (day < 23) {
      astroSign = "Leo";
    } else {
      astroSign ="Virgo";
    }
  }
          
  else if (month == "September"){
    if (day < 23) {
      astroSign = "Virgo";
    } else {
      astroSign ="Libra";
    }
  }
          
  else if (month == "October"){
    if (day < 23) {
      astroSign = "Libra";
    } else {
      astroSign ="Scorpio";
    }
  }
          
  else if (month == "November"){
    if (day < 22) {
      astroSign = "Scorpio";
    } else {
      astroSign ="Sagittarius";
    }
  }
          
  document.write(astroSign);
}
 
// Driver Code
let day = 4;
let month = "august";
zodiacSign(day, month);