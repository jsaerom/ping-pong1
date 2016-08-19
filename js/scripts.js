// Back-End Logic
var inputNum = 0;
var outputResults = [];

function inputResult(input){
  for (var i = 1; i <= input; i++){
    outputResults.push(i);
  }
}

function pingPong(input){
  inputResult(inputNum);
  for (var i = 0; i < outputResults.length; i++){
    if ((outputResults[i] % 15) === 0){
      outputResults[i] = "ping-pong";
    } else if ((outputResults[i]%5) === 0){
      outputResults[i] = "pong";
    } else if ((outputResults[i]%3) === 0){
      outputResults[i] = "ping";
    }
  }
}

// Front-End Logic
$("form").submit(function(event){
  event.preventDefault();
  inputNum = parseInt($("#inputNum").val());
  pingPong(inputNum);
  for (var i = 0; i < outputResults.length; i++){
  $("ul").append("<li>" + outputResults[i] + "</li>");
  };
});
