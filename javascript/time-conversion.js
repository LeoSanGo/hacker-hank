/* 
Author

Difficulty

Max Scor

Submitte

NEED H

To view

View

Glven a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

8'12:01:00PM'

Return 12:01:00

8= '12:01:00AM

Return 00:01:00.

Function Description

Complete the timeConversion furiction in the editor below. It should return a new string representing the input time in 24 hour

format

timeConversion has the following parameter(s):

string sa time in 12 hour format

Returns

string the time in 24 hour format

Input Format

A single strings that represents a time in 12-hour clock format e hh:mm:ssAMhh:mm:ssPM

Constraints

RATE THIS

4 Suggest

Sample input o

07:05:45PM

Sample Output 0

19:05:45

*/

function timeConversion(s) {
  const period = s.slice(8);
  let number = 0;

  if (period === 'PM') {
    number = parseInt(s.slice(0, -8));

    if (number === 12) {
      return `${number}${s.slice(2, 8)}`;
    } else {
      const hour = 12 + parseInt(s.slice(0, -8));
      return `${hour}${s.slice(2, 8)}`;
    }
  } else {
    number = parseInt(s.slice(0, -8));

    if (number === 12) {
      return `00${s.slice(2, 8)}`;
    } else {
      return s.slice(0, 8);
    }
  }
}

const s = '12:45:54PM';
console.log(timeConversion(s));

/* 
Other solutions

let AMPM = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");
    
    if (AMPM === "AM" && timeArr[0] === "12") {
        // catching edge-case of 12AM
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        // everything with PM can just be mod'd and added with 12 - the max will be 23
        timeArr[0] = (timeArr[0] % 12) + 12
    }
    
    return timeArr.join(":");
  }
    -----------------------------------
    function timeConversion(s) {
    let _hour = parseInt(s.split(':')[0]);
    let dayNight = (s.includes('AM')) ? 'AM' : 'PM';
    _hour =
    (_hour < 12 && dayNight === 'PM') ? '' + (12 + _hour) + ':' :
    (_hour == 12 && dayNight === 'PM') ? _hour + ':' :
    (_hour < 12 && dayNight === 'AM') ? _hour + ':' :
    '00:';
    return `${_hour.padStart(3, 0)}${s.substring(3)}`.replace(dayNight, '');

------------------------------------------------
const arr = s.slice(0, 8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ?
        (arr[0] == 12) ? arr[0] = '12' : Number(arr[0]) + 12 :
        (arr[0] == 12) ? '00' : arr[0];
   return(arr.join(':'));

--------------------------------------------------

*/
