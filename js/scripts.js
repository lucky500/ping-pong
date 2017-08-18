//Business logic
function pingPong(userInput){
  if(userInput === " "){
    alert("Please Enter a Number");
  } else {
    for(var i = 1; i <= userInput; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log("ping pong");
      } else if(i % 3 === 0){
        console.log("ping");
      } else if (i % 5 === 0){
        console.log("pong");
      } else {
        console.log(i);
      }
    }
  }
}

//User Interface logic
$(document).ready(init);

function init(){
  $('form').submit(function(e){
    e.preventDefault();
    var userInput = $('#inputNumber').val();
    pingPong(userInput);
  });
}