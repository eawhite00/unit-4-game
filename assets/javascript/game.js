

var targetScore = 0;
var currentScore = 0;
var lastScore = 0

var crystalScores = [0, 0, 0, 0];

var wins = 0;
var losses = 0;





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

function setCrystalScores() {
    for (i = 0; i < crystalScores.length; i++){
        crystalScores[i] = Math.floor( Math.random() * 12 ) + 1;
    }
}

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




setUp();
console.log(crystalScores);
