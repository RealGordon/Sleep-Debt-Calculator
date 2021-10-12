/*
The program will determine the actual and ideal hours of sleep 
for each night of the last week and
 calculate, in hours, how far you are from your weekly sleep goal.
 *fscp-javascript-syntax-part-i*
 __author: gordon.amamoo@amalitech.org 10/11/2021
*/

//function returns actual sleep hours for a particular day
function getSleepHours(day){
  //normalizing user input
  day=day.toLowerCase();

   if (day === 'monday') {
    return 8;
  } else if  (day === 'tuesday') {
    return 7;
  } else if  (day === 'wednesday') {
    return 8;
  } else if(day === 'thursday') {
    return 5;
  } else if (day === 'friday') {
    return 4;
  } else if (day === 'saturday') {
    return 6;
  } else if (day === 'sunday') {
    return 6;
  } 
  
}
//get actual total sleep hours for the week
const getActualSleepHours=()=>{
const days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
let hours=0;
let day;

//sum all actual sleep hours
for(day in days){
  hours+=getSleepHours(days[day])
} 
return hours 
}

//get ideal sleep hours for a week
const getIdealSleepHours=()=>{
  const idealHours=8;
  return idealHours*7
}

const calculateSleepDebt=()=>{
const actualSleepHours=getActualSleepHours();
const idealSleepHours=getIdealSleepHours();
const difference=Math.abs(actualSleepHours-idealSleepHours);
  if (actualSleepHours === idealSleepHours) {
    console.log(
      `${difference} difference between actual and ideal sleep hours\n` +
      "You got the perfect amount of sleep!")
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You had ${difference} hours over your ideal sleep hours\n` +
      "You got more sleep than needed!")
  } else {
    console.log(
      `You are under your ideal sleep hours by ${difference}  hours\n` +
      "You should get more sleep...")
  }
}
calculateSleepDebt(); 