
//////////////////////////////////////////////////VARIABLES//////////////////////////////////////////////////


var playerOne = {};
var playerTwo = {};
var playerOneDie, playerTwoDie;
var ranDieOne = Math.ceil(Math.random()*6);
var ranDieTwo = Math.ceil(Math.random()*6);
var playerOneOwnedProperties = [];
var playerTwoOwnedProperties = [];
var playerOnePositionCounter = 0;
var playerTwoPositionCounter = 0;
// // var playerOne = {
// //     name : "",
// //     playerTurn : "",
// //     cash : 1000,
// //     currentPosition : "",
//         firstroll
//         token

// // };

// var player2 = {
//     name : "",
//     playerTurn : "",
//     cash : 1000,
//     currentPosition : ""
// };

var boardPosition = ['start', 'goldenGatePark', 'huntersPoint', 'sunset', 'nobHill', 'oneWayStreet', 'noeValley', 
                    'missionDistrict','chinaTown','haightAshbury','chance','theCastro','civicCenter','AlamoSquare',
                    'dogPatch','fog','northBeach','soma','financialDistrict','russianHill'];

//////////////////////////////////////////////////FUNCTIONS//////////////////////////////////////////////////

function updateTurn(player){

}

function movePlayer(player){

}

$(document).on('click','diceButton',function(){

})




//Tristin


$('#start').on('click', function (){
    event.preventDefault();
   $('.containerStart').hide();
   $('.containerInstructions').show();
});

$(document).on('click', '#instructionsGoToGame', function (){
    event.preventDefault();

    // This is so we can have a button on screen 4, Main Game, to view/show the instructions mid-game on click of another button, if we want.
    if ($(this).attr('data-gamestart') == 'no'){
        $('.containerInstructions').hide();
        $('.containerPlayers').show();
        $(this).attr('data-gamestart', 'yes');
    }
});

$(document).on('click', '#instructionsGoToGame', function (){
    event.preventDefault();

    // This is so we can have a button on screen 4, Main Game, to view/show the instructions mid-game on click of another button, if we want.
    if ($(this).attr('data-gamestart') == 'no'){
        $('.containerInstructions').hide();
        $('.containerPlayers').show();
        $(this).attr('data-gamestart', 'yes');
    }
});

    // Sandy, if you're looking at this, this is as far as I got. Trying to think how to store the token choices and die roll.





$(document).on('click', '.playerTokenOne', function(){
if (playerOne.token == undefined){
    playerOne.token = $(this).attr('src');
    $(this).addClass('tokenBorder');
}
});

$(document).on('click', '.playerTokenTwo', function(){
if (playerTwo.token == undefined){
    playerTwo.token = $(this).attr('src');
    $(this).addClass('tokenBorder');
}
});

$(document).on('click', '#playerOneDie', function (){
if (ranDieOne == ranDieTwo){
    ranDieOne = Math.ceil(Math.random()*6);
}else {
   playerOneDie = ranDieOne;
   $('#playerOneDie').attr('src', 'assets/images/dice/' + ranDieOne + '.png').addClass('die');
   playerOne.firstroll = ranDieOne;
}
});

$(document).on('click', '#playerTwoDie', function (){  
if (ranDieTwo == ranDieOne){
  ranDieTwo = Math.ceil(Math.random()*6);
} else {
    playerTwoDie = ranDieTwo;
    $('#playerTwoDie').attr('src', 'assets/images/dice/' + ranDieTwo + '.png').addClass('die');
    playerTwo.firstroll = ranDieTwo;
}
});


$(document).on('click', '#submitPlayerInfo', function (){
    event.preventDefault();
    if ($('#playerOneName').val() == '' || $('#playerTwoName').val() == ''){
        alert('Please enter your name, Player One.');
    }else if (playerOne.token == undefined || playerTwo.token == undefined){
        alert('Please choose a token, Player One.')
    }else if (playerOne.firstroll == undefined || playerTwo.firstroll == undefined){
        alert('Please click the die to roll, Player One.')
    }else {
        playerOne.name = $('#playerOneName').val();
        playerTwo.name = $('#playerTwoName').val();
        playerOne.currentPosition = "start";
        playerTwo.currentPosition = "start";
        playerOne.cash = 1000;
        playerTwo.cash = 1000;
        $('.containerPlayers').hide();
        $('.containerMainGame').show();
        $('#playerOneGameName').text(playerOne.name);
        $('#playerTwoGameName').text(playerTwo.name);
        $('#playerOneGameCash').text(playerOne.cash);
        $('#playerTwoGameCash').text(playerTwo.cash);
        if (playerOneDie > playerTwoDie){
            playerOne.turn = true;
            playerTwo.turn = false;
            $("#playerTwoGameDie").hide();
        }
        else{
            playerOne.turn = false;
            playerTwo.turn = true;
            $("#playerOneGameDie").hide();
        }
    }

});

$(document).on('click','#playerOneGameDie',function(){
    ranDieOne = Math.ceil(Math.random()*6);
    $('#playerOneGameDieImage').attr('src', 'assets/images/dice/' + ranDieOne + '.png').addClass('die');

})

// $(document).on('click', '#submitTwo', function (){
// event.preventDefault();
// if ($('#playerTwoName').val() == ''){
//     alert('Please enter your name, Player Two.');
// }else if (playerTwo.token == undefined){
//     alert('Please choose a token, Player Two.')
// }else if (playerTwo.firstroll == undefined){
//     alert('Please click the die to roll, Player Two.');
// }else {
//     playerTwo.name = $('#playerTwoName').val();
//     $('.playerBoxTwo').hide();
// }
// });