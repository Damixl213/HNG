function updateUTCTime() {
  const options = { 
      year: 'numeric', 
      month: 'short', 
      weekday: 'short', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
     
  };
  
  const now = new Date().toUTCString('en-US', options) ;
  
  const utcString = now + ' UTC';

  document.querySelector('.utc-time').textContent = utcString;
}


    // Update every second
    setInterval(updateUTCTime, 1000);
    updateUTCTime();


