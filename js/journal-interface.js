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
