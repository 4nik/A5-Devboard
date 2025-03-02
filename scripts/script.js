function getLocalTime() {
    const dateTime = new Date();
    const setTimeFormat = { timeZone: 'Asia/Dhaka', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = dateTime.toLocaleTimeString('en-US', setTimeFormat);
    return formattedTime;
  }
  console.log(getLocalTime());