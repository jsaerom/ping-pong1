// Back-End Logic
var inputNum = 0;
var outputResults = [];

function inputResult(input){
  for (var i = 1; i <= input; i++){
    outputResults.push(i);
  }
}

function pingPong(input){
  for (var i = 0; i < outputResults.length; i++){
    if ((outputResults[i] % 15) === 0){
      outputResults[i] = "Ping-Pong!";
    } else if ((outputResults[i]%5) === 0){
      outputResults[i] = "Pong!";
    } else if ((outputResults[i]%3) === 0){
      outputResults[i] = "Ping!";
    }
  }
}

// Front-End Logic
$("form").submit(function(event){
  inputNum = parseInt($("#inputNum").val());
  outputResults = [];
  inputResult(inputNum);
  pingPong(inputNum);
  $("ul").empty();
  $(".hideThis").hide();
  for (var i = 0; i < outputResults.length; i++){
    $("ul").append("<li>" + outputResults[i] + "</li>");
  };
  event.preventDefault();
});
