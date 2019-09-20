//set up our global variables
var targetScore = 0;
var currentScore = 0;
var lastScore = 0

var crystalScores = [0, 0, 0, 0];

var wins = 0;
var losses = 0;




//This function sets up the game, resetting values / displays
function setUp(){
    currentScore = 0;
    lastScore = 0;
    $("#currentScoreDisplay").text("0");    
    $("#lastScoreDisplay")  .text("0");
    $("#winsText").text(wins);
    $("#lossesText").text(losses);

    targetScore = Math.floor( Math.random() * 102 ) + 19;
    $("#targetScoreDisplay").text(targetScore);

    setCrystalScores();

}

//This is a part of setup that I made its own function for readability- it sets the values for each crytsal.
function setCrystalScores() {
    for (i = 0; i < crystalScores.length; i++){
        crystalScores[i] = Math.floor( Math.random() * 12 ) + 1;
    }
}

//Here's where we handle adding a new score, including checking for / tracking wins/losses
function addScore(crystalNumber){

    lastScore = crystalScores[crystalNumber];
    currentScore += lastScore;

    $("#currentScoreDisplay").text(currentScore);
    $("#lastScoreDisplay").text(lastScore);

    if (currentScore === targetScore){
        wins++;
        setUp();
    }
    if (currentScore > targetScore){
        losses++
        setUp();
    }

}

//Here's the button click handlers- all it does is pass the crystal number as an index to the addScore function.
$("#box1").on("click", function(){
    addScore(0);
});

$("#box2").on("click", function(){
    addScore(1);
});

$("#box3").on("click", function(){
    addScore(2);
});

$("#box4").on("click", function(){
    addScore(3);
});

//Here's our initial setup to get the game ready.
setUp();

