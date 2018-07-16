
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

// objects for each property


var start = {
    name: "GO!",
    price: 200,
    url: 'assets/images/prop-imgs/go.jpg'
};
var goldenGatePark = {
    name: "Golden Gate Park",
    price: 100,
    rent: 50,
    url: 'assets/images/prop-imgs/goldenGatePark.jpg'
};
var huntersPoint = {
    name: "Hunter's Point",
    price: 120,
    rent: 60,
    url: 'assets/images/prop-imgs/huntersPoint.jpg'
};
var sunset = {
    name: "Sunset",
    price: 140,
    rent: 70,
    url: 'assets/images/prop-imgs/sunset.jpg'
};
var nobHill = {
    name: "Nob Hill",
    price: 160,
    rent: 80,
    url: 'assets/images/prop-imgs/nobHill.jpg'
};
var oneWayStreet = {
    name: "Wrong way! One Way Street. Lose one turn.",
    price: 0,
    rent: 0,
    url: 'assets/images/prop-imgs/oneWayStreet.jpg'
};
var noeValley = {
    name: "Noe Valley",
    price: 180,
    rent: 90,
    url: 'assets/images/prop-imgs/noeValley.jpg'
};
var missionDistrict = {
    name: "Mission District",
    price: 200,
    rent: 100,
    url: 'assets/images/prop-imgs/missionDistrict.jpg'
};

var chinaTown = {
    name: "China Town",
    price: 220,
    rent: 110,
    url: 'assets/images/prop-imgs/chinaTown.jpg'
};
var haightAshbury = {
    name: "Haight Ashbury",
    price: 240,
    rent: 120,
    url: 'assets/images/prop-imgs/haightAshbury.jpg'
};
var chance = {
    name: "Chance! Take a chance card and follow the instructions.",
    price: 0,
    rent: 0,
    url: 'assets/images/prop-imgs/chance.jpg'
};
var theCastro = {
    name: "The Castro",
    price: 260,
    rent: 130,
    url: 'assets/images/prop-imgs/theCastro.jpg'
};
var civicCenter = {
    name: "Civic Center",
    price: 280,
    rent: 140,
    url: 'assets/images/prop-imgs/civicCenter.jpg'
};
var alamoSquare = {
    name: "Alamo Square",
    price: 300,
    rent: 150,
    url: 'assets/images/prop-imgs/alamoSquare.jpg'
};
var dogPatch = {
    name: "Dog Patch",
    price: 300,
    rent: 150,
    url: 'assets/images/prop-imgs/dogPatch.jpg'
};
var fog = {
    name: "Lost in the fog. Lose one turn.",
    price: 0,
    rent: 0,
    url: 'assets/images/prop-imgs/fog.jpg'
};
var northBeach = {
    name: "North Beach",
    price: 320,
    rent: 160,
    url: 'assets/images/prop-imgs/northBeach.jpg'
};
var soma = {
    name: "SOMA",
    price: 340,
    rent: 170,
    url: 'assets/images/prop-imgs/northBeach.jpg'
};
var financialDistrict = {
    name: "Financial District",
    price: 360,
    rent: 180,
    url: 'assets/images/prop-imgs/financialDistrict.jpg'
};
var russianHill = {
    name: "Russian Hill",
    price: 380,
    rent: 190,
    url: 'assets/images/prop-imgs/russianHill.jpg'
};

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
        alert('Please enter a name for both players.');
    }else if (playerOne.token == undefined || playerTwo.token == undefined){
        alert('Please choose a token for both players')
    }else if (playerOne.firstroll == undefined || playerTwo.firstroll == undefined){
        alert('Please click the die to roll for each player.')
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
            $("#playerTwoGameDieImage").hide();
        }
        else{
            playerOne.turn = false;
            playerTwo.turn = true;
            $("#playerOneGameDie").hide();
            $("#playerOneGameDieImage").hide();
        }
    }

});

$(document).on('click','#playerOneGameDie',function(){
    ranDieOne = Math.ceil(Math.random()*6);
    $('#playerOneGameDieImage').attr('src', 'assets/images/dice/' + ranDieOne + '.png').addClass('die');

})
$(document).on('click','#playerTwoGameDie',function(){
    ranDieTwo = Math.ceil(Math.random()*6);
    $('#playerTwoGameDieImage').attr('src', 'assets/images/dice/' + ranDieTwo + '.png').addClass('die');

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