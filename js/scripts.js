// Back-End Logic
var inputNum = 0;
var outputResults = [];
var answerThree = 0;
var answerFive = 0;
var answerFifteen = 0;

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
function userAnswer(input3, input5, input15){
  if (input3 === 3 && input5 === 5 && input15 === 15){
    return true;
  } else{
    return false;
  }
}


// Front-End Logic
$("form#pingPong").submit(function(event){
  event.preventDefault();
  inputNum = parseInt($("#inputNum").val());
  if (!$("input").val()){
    alert("Please enter a valid number.");
  } else if (inputNum <= 0){
    alert("Pleae enter a number greater than 0.");
  } else{
    outputResults = [];
    inputResult(inputNum);
    pingPong(inputNum);
    $("ul").empty();
    $(".hideThis").hide();
    $("#showThis1").show();
    $("#inputLabel").text("Enter another number:");
    for (var i = 0; i < outputResults.length; i++){
      $("ul").append("<li>" + outputResults[i] + "</li>");
    };
  };
});

$(".clickable").click(function(){
  $("#showThis2").toggle();
});

$("#banner").click(function(){
  document.location.reload(true);
});

$("form#solutionForm").submit(function(event){
  event.preventDefault();
  answerThree = parseInt($("input#three").val());
  answerFive = parseInt($("input#five").val());
  answerFifteen = parseInt($("input#fifteen").val());
  if (userAnswer(answerThree, answerFive, answerFifteen) === true){
    $("#correct").show();
    $("#incorrect").hide();
  }else {
    $("#incorrect").show();
    $("#correct").hide();
  }
});
