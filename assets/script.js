var timeDisplay = $('#currentDay');
const timeblocks = $('.row');




var currentTime;
//function to display time 
function getTime() {
    var Now = moment().format('dddd, MMMM Do [at] h:mm A');
    currentTime = timeDisplay.text(Now);
  }
  setInterval(getTime, 1000);

  if(currentTime){

  }

//loop through time block to give them a style
timeblocks.each(function() {
    const hour = parseInt($(this).find('.hour').text().slice(0, -2));
    if (hour < currentTime) {
      $(this).addClass('past');
    } else if (hour === currentTime) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });


