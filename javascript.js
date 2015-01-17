<html>
  <head>
    <script>   

function buddahSays {
  function searchTerm {
    var user = [user input]; //OR document.getElementById("user").innerHTML;
    var adjs = [messy, ugly, super, stupid]; 
    //Randomize source: http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
    var randA = adjs[Math.floor(Math.random() * adjs.length)];
    var search = user.unshift(randA + " ");
    }
    var question = ["What would you like to eat?", "What is your spirit animal?", "what "]; //OR document.getElementById("question").innerHTML;
   //Switch source: https://www.youtube.com/watch?v=Z6O_XdfCBEo 
   switch (question) {
    case "what would you like to eat?": 
      document.write("enjoy your " + search + "motherfucker");
      break;
    case "animal":
      document.write("You're a " + search + "______");
      break;
    case "feeling":
      document.write("This is what " + search + "looks like");
      break;
    }

};


 /**   
 //var user = [user input]; 
  var question = [
  {'what would you like to eat?': 'enjoy your' + search + },
  {'second question: second answer' + }];

 //randomizes output
 var randQ = questions[Math.floor(Math.random() * question.length)];

 return ("enjoy your " + search + " motherfucker");


};

if user inputs an answer with unrecognized symbol, return "wat"?  <---------
*/
    </script>
    <h1 id = "question"></h1>
    <h2 id = "user"> </h2>

  </head>
</html>

