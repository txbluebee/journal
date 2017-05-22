var apiKey = "e4e7cba7a8388ccfd7386a79f5d0536e";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The Weather in " + city + " is " + response['weather'][0]['description']);
    });
  });
});
