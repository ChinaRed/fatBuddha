function validateUserInput() {
    var userResponse = document.forms["myForm"]["yourresponse"].value;
    if (x===null || x==="") {
        alert("try again homie!");
        return false;
    }
}

function compareUserInput() {
  var userResponse2 = document.forms["myForm"]["yourresponse"].value;
  var userArr = userResponse2.split("");
  //var compare = ;
}
function searchTerm() {
    var user = document.getElementById("user").innerHTML;
    var adjs = ["messy", "ugly", "super", "stupid"]; 
    //Randomize source: http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
    var randA = adjs[Math.floor(Math.random() * adjs.length)];
    var search = user.unshift(randA + " ");
    }
function buddahSays() {
    var question = document.getElementById("dropdownMenu1").innerHTML;
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



/* 
SARAH'S CODE

$(document).ready(function(){
  var search_term = "steve+jobs";

  $.ajax({
    url: "https://www.googleapis.com/customsearch/v1",
    data: {
      key: "AIzaSyBLiL9m64v2o5eSfIcsTQ_Epl_qy8_ZGI8",
      cx: "004953656570767173379:eugpp6v3_yq",
      searchType: "image",
      q: search_term
    }
  })
  .done(function(data) {
    console.log( "Sample of data:", data );
  });

*/