$(document).ready(function () {
    var currentHour = moment().format("HH");
  
    function appendCurrentDate() {
      var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm A");
      $("#currentDay").text(currentDate);
    }
  });
  