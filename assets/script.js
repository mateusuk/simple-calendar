var timeDisplay = $('#currentDay');
const timeblocks = $('.row');


// aaa

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




 

  $('.saveBtn').on('click', function(event){
    event.preventDefault();
   var hoursOfday = {
        nine: $('#9').val(),
        ten: $('#10').val(),
        eleven:$('#11').val(),
        twelve: $('#12').val(),
        one: $('#1').val(),
        two: $('#2').val(),
        three: $('#3').val(),
        four: $('#4').val(),
        five: $('#5').val(),
    };

  localStorage.setItem("events", JSON.stringify(hoursOfday));

 });


//  display events when its refresh
 var eventsSaved = JSON.parse(localStorage.getItem("events"));
  $('#9').text(eventsSaved.nine);
  $('#10').text(eventsSaved.ten);
  $('#11').text(eventsSaved.eleven);
  $('#12').text(eventsSaved.twelve);
  $('#1').text(eventsSaved.one);
  $('#2').text(eventsSaved.two);
  $('#3').text(eventsSaved.three);
  $('#4').text(eventsSaved.four);
  $('#5').text(eventsSaved.five);

  if (eventsSaved === null){
    

  }
 





