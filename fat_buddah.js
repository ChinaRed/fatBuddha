   function validateUserInput() {
    var userResponse = document.forms["myForm"]["userinput"].value;
    if (x===null || x==="") {
        alert("try again homie!");
        return false;
    }
}
function compareUserInput() {
  var userResponse2 = document.forms["myForm"]["userinput"].value;
  var userArr = userResponse2.split("");
  var compare = 
}
function searchTerm() {
    var user = document.getElementById("user").innerHTML;
    var adjs = [messy, ugly, super, stupid]; 
    //Randomize source: http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
    var randA = adjs[Math.floor(Math.random() * adjs.length)];
    var search = user.unshift(randA + " ");
    }
function buddahSays() {
    var question = document.getElementById("question").innerHTML;
   //Switch source: https://www.youtube.com/watch?v=Z6O_XdfCBEo 
   switch (userSelction) {
    case "what food does your heart desire?": 
      document.write("enjoy your " + search + "mother");
      break;
    case "what is your favorite animal?":
      document.write("You're a " + search + "______");
      break;
    case "feeling":
      document.write("This is what " + search + "looks like");
      break;
    }
}





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
    
