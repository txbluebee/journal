(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "c7b42cc50b36cb7d75ee54c3e486ac71";

},{}],2:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.getTeaser = function(sentence) {
    var bodyArray = sentence.split(' ');
    var intro = [];
    for (i = 0; i <= 7; i++) {
      if (bodyArray[i] === undefined) {
        break;
      }
      intro.push(bodyArray[i]);
      if (bodyArray[i].indexOf('.') != -1) {
        break;
      }
    }
    return intro.join(' ');
  };
  this.getWordCount = function(sentence) {
    var bodyArray = sentence.split(' ');
    return bodyArray.length;
  };
  this.getVowelCount = function(sentence) {
    var vowelCount = 0;
    console.log("test");
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var bodyArray = sentence.split('');
    bodyArray.forEach(function(letter) {
      if (vowels.indexOf(letter) != -1 ) {
        vowelCount ++;
      }
    });
    return vowelCount;
  };
  this.getConsonantCount = function(sentence) {
    var consonantCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var bodyArray = sentence.split('');
    bodyArray.forEach(function(letter) {
      if ((vowels.indexOf(letter) === -1 ) && (letter !== ' ')) {
        consonantCount ++;
      }
    });
    return consonantCount;
  };
}


exports.journalModule = Entry;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Weather = function() {
  this.getWeather = function(city, displayHumidity) {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      displayHumidity(city, response.main.humidity)
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  }
}

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Entry(title, body);
    $('#output').append(
      '<h5> Teaser: ' + newJournal.getTeaser(body) + '</h5>' +
      "<h3>" + newJournal.title + "</h3>" +
      '<p>' + moment().format('MMMM Do YYYY, h:mm:ss a') + '</p>' +
      "<p>" + newJournal.body + "</p>" +
      "<p> Word Count: " + newJournal.getWordCount(body) + "</p>" +
      "<p> Vowel Count: " + newJournal.getVowelCount(body) + "</p>" +
      "<p> Consonant Count: " + newJournal.getConsonantCount(body) + "</p>"
    );
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});

},{"./../js/journal.js":2,"./../js/weather.js":3}]},{},[4]);
