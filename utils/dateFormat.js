// Purpose: This file will format the timestamp to a more readable format.
const addDateSuffix = date => {
    let dateStr = date.toString();
  
    const lastChar = dateStr.charAt(dateStr.length - 1);
  
    // if date ends in 1 and is not 11, add 'st' to date
    if (lastChar === '1' && dateStr !== '11') {
      dateStr = `${dateStr}st`;
    } else if (lastChar === '2' && dateStr !== '12') {
      dateStr = `${dateStr}nd`;
    } else if (lastChar === '3' && dateStr !== '13') {
      dateStr = `${dateStr}rd`;
    } else {
      dateStr = `${dateStr}th`;
    }
  
    return dateStr;
  };
  
  // function to format a timestamp, accepts the timestamp and an `options` object as optional arguments
  module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
  ) => {
    let months;
  
    // if `monthLength` is 'short', use the abbreviated month names, otherwise use the full month names
    if (monthLength === 'short') {
      months = {
        0: 'Jan',
        1: 'Feb',
        2: 'Mar',
        3: 'Apr',
        4: 'May',
        5: 'Jun',
        6: 'Jul',
        7: 'Aug',
        8: 'Sep',
        9: 'Oct',
        10: 'Nov',
        11: 'Dec'
      };
    } else {
      months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
      };
    }
  
    const dateObj = new Date(timestamp); // create a new date object from the timestamp
    const formattedMonth = months[dateObj.getMonth()]; // get the month from the date object
  
    let dayOfMonth;
  
    // if dateSuffix is true and date is not 11, 12, or 13, add a suffix to the date
    if (dateSuffix) {
      dayOfMonth = addDateSuffix(dateObj.getDate());
    } else {
      dayOfMonth = dateObj.getDate();
    }
  
    // return formatted timestamp
    const year = dateObj.getFullYear();
    let hour = dateObj.getHours() > 12
      ? Math.floor(dateObj.getHours() / 2)
      : dateObj.getHours();
  
    if (hour === 0) {
      hour = 12;
    }
  
    const minutes = dateObj.getMinutes();
    const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';
  
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
  
    return formattedTimeStamp;
  };
  