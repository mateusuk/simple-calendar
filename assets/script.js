var timeDisplayEl = $('#currentDay');

function displayTime() {
    var Now = moment().format('dddd, MMMM Do.');
    timeDisplayEl.text(Now);
  }
  setInterval(displayTime, 1000);