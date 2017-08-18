//Business logic


//User Interface logic
$(document).ready(init);

function init(){
  $('form').submit(function(e){
    e.preventDefault();
    var userInput = $('#inputNumber').val();
    console.log(userInput);
  });
}