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
