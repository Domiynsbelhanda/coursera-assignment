(function (window) {
    
    var names = ["Dominique", "Youness", "Francel", "Hadry", "Rollins", "Marvin", "LaPaille", "Belhanda", "Jin Cool", "The Best"];
    for (var i in names) {
    
    
      var firstLetter = ((names[i]).charAt(0)).toLowerCase();

      if (firstLetter == 'j') {
         window.byeSpeaker.speak(names[i]);
      } else {
         window.helloSpeaker.speak(names[i]);
      }
    }
    })(window);