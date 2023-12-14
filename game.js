
var buttonColours =["red", "blue", "green", "yellow"];
var gamePattern = [];
var playerPattern = [];
var started = false;
var level = 0;


//////start

$(document).on("keypress click",function() {
    if (!started) {
      nextSequence();
      started = true;
    }
  });  
/////

    

$(".btn").click(function(){
 var userChosenColour = $(this).attr("id");
 playerPattern.push(userChosenColour);
playSound(userChosenColour);
makeAnimation(userChosenColour);
check();
})


////////////////////////////////////////////////////////// labas ng game

function check(){
if (gamePattern.length===playerPattern.length && gamePattern[level - 1]===playerPattern[level - 1]){
    setTimeout(function () {
        nextSequence();
    }, 500);  
 }

else if (gamePattern[playerPattern.length-1]!==playerPattern[playerPattern.length-1]){
    wrong();
}
}

//playsounds
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
   
  
  //make animation haha
function makeAnimation(name){
    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);   
}

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4); 
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    setTimeout(function () {
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); 
    }, 1000);

    level++;
    $("#level-title").text("Umpisa na ang laban, nasa level " + level + " ka!");
    playerPattern.length = 0;
}

function wrong(){
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("red");

    setTimeout(function(){
        $("body").removeClass("red"); 
    }, 200)
    $("#level-title").text("Nice try pa rin! Press click kahit saan para umulit");
    
    setTimeout(function(){
        started = false;
        level = 0;
        playerPattern.length = 0;
        gamePattern.length = 0; 
    }, 100)

}

