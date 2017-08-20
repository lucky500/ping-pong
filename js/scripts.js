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
      i % 15 === 0 ? result.push('pingpong')
      : i % 3 === 0 ? result.push('ping')
      : i % 5 === 0 ? result.push('pong')
      : result.push(i);
    }
  }
  return result;
}


//User Interface logic
$(document).ready(init);
function init(){
  $('form').submit(function(e){
    e.preventDefault();
    var userInput = $('#inputNumber').val();
    var outputResult = pingPong(userInput);
    console.log(outputResult);
    var modifiedResult = outputResult.map(function(item){
      if(item === "pingpong"){
        return '<li class="ball"><span class="pingpong">' + item + '</span></li>'
      } else if(item === "pong") {
        return '<li class="ball"><span class="pong">' + item + '</span></li>'
      } else if(item === "ping") {
        return '<li class="ball"><span class="ping">' + item + '</span></li>'
      } else {
        return '<li class="ball"><span class="number">' + item + '</span></li>'
      }
    });
    $('.rules').hide();
    $('.output').html(modifiedResult.join(""));
    $('.ball').each(function(i, e){
      $(this).delay(i * 400).fadeIn();
    });
    $('.game-title').text('Try Again!!!');
    $('#inputNumber').val('');
  });
}
