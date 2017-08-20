//Business logic
function pingPong(userInput){
  var result = [];
  if(userInput === " "){
    alert("Please Enter a Number");
  } else {
    for(var i = 1; i <= userInput; i++){
      // if(i % 3 === 0 && i % 5 === 0){
      //   console.log("ping pong");
      // } else if(i % 3 === 0){
      //   console.log("ping");
      // } else if (i % 5 === 0){
      //   console.log("pong");
      // } else {
      //   console.log(i);
      // }
      i % 3 === 0 && i % 5 === 0 ? result.push('pingpong') 
      : i % 3 === 0 ? result.push('ping') 
      : i % 5 === 0 ? result.push('pong') 
      : result.push(i);
    }
  } 
  return result;
}

//Trying D3js
function start(){
  var liString;
  d3.select("body")
    .append("ul")
    .text("tring it out")
}


//User Interface logic
$(document).ready(init);
function init(){
  $('form').submit(function(e){
    e.preventDefault();
    var userInput = $('#inputNumber').val();   
    var outputResult = pingPong(userInput);
    var modifiedResult = outputResult.map(function(item){
      return '<li><span>' + item + '</span></li>';
    });
    $('.rules').hide();
    $('.output').html(modifiedResult.join(""));
    $('.game-title').text('Try Again!!!');
    $('#inputNumber').val('');
  });
}