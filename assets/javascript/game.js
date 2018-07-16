var randomDieOne = Math.ceil(Math.random()*6);
var randomDieTwo = Math.ceil(Math.random()*6);
var playerOneRollTotal = 0;
var playerTwoRollTotal = 0;
var playerOneMoney = 1000;
var playerTwoMoney = 1000;

$('#player1-money').text(playerOneMoney);
$('#player2-money').text(playerTwoMoney);

$(document).on('click','#player1-game-die',function(){
    randomDieOne = Math.ceil(Math.random()*6);
    $('#player1-game-die-image').attr('src', 'assets/images/dice/' + randomDieOne + '.jpg').addClass('die');
    playerOneRollTotal += randomDieOne;
    if (playerOneRollTotal > 24){
        playerOneRollTotal = randomDieOne;
    }
    console.log(randomDieOne);
    console.log(playerOneRollTotal);
    movePlayerOne();
});

$(document).on('click','#player2-game-die',function(){
    randomDieTwo = Math.ceil(Math.random()*6);
    $('#player2-game-die-image').attr('src', 'assets/images/dice/' + randomDieTwo + '.jpg').addClass('die');
    playerTwoRollTotal += randomDieTwo;
    if (playerTwoRollTotal > 24){
        playerTwoRollTotal = randomDieTwo;
    }
    console.log(randomDieTwo);
    console.log(playerTwoRollTotal);
    movePlayerTwo();
});

function hidePlayerOne(){
    $('#player1-old-kent-1').hide();
    $('#player1-old-kent-2').hide();
    $('#player1-community-chest-2').hide();
    $('#player1-angel').hide();
    $('#player1-pentonville').hide();
    $('#player1-visiting-jail').hide();
    $('#player1-whitehall').hide();
    $('#player1-north').hide();
    $('#player1-chance-1').hide();
    $('#player1-marlborough').hide();
    $('#player1-vine').hide();
    $('#player1-free-parking').hide();
    $('#player1-fleet').hide();
    $('#player1-trafalgar').hide();
    $('#player1-community-chest-1').hide();
    $('#player1-coventry').hide();
    $('#player1-piccaddily').hide();
    $('#player1-in-jail').hide();
    $('#player1-oxford').hide();
    $('#player1-bond').hide();
    $('#player1-chance-2').hide();
    $('#player1-park').hide();
    $('#player1-mayfair').hide();
    $('#player1-go').hide();
}

function hidePlayerTwo(){
    $('#player2-old-kent-1').hide();
    $('#player2-old-kent-2').hide();
    $('#player2-community-chest-2').hide();
    $('#player2-angel').hide();
    $('#player2-pentonville').hide();
    $('#player2-visiting-jail').hide();
    $('#player2-whitehall').hide();
    $('#player2-north').hide();
    $('#player2-chance-1').hide();
    $('#player2-marlborough').hide();
    $('#player2-vine').hide();
    $('#player2-free-parking').hide();
    $('#player2-fleet').hide();
    $('#player2-trafalgar').hide();
    $('#player2-community-chest-1').hide();
    $('#player2-coventry').hide();
    $('#player2-piccaddily').hide();
    $('#player2-in-jail').hide();
    $('#player2-oxford').hide();
    $('#player2-bond').hide();
    $('#player2-chance-2').hide();
    $('#player2-park').hide();
    $('#player2-mayfair').hide();
    $('#player2-go').hide();
}

function movePlayerOne(){
    if (playerOneRollTotal == 1){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Old Kent Road');
        $('#player1-old-kent-1').show();
    }else if (playerOneRollTotal == 2){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Old Kent Road');
        $('#player1-old-kent-2').show();
    }else if (playerOneRollTotal == 3){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-community-chest-2').show();
        alert('Community Chest!');
        playerOneEnd();
    }else if (playerOneRollTotal == 4){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('The Angel, Islington');
        $('#player1-angel').show();
    }else if (playerOneRollTotal == 5){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Pentonville Road');
        $('#player1-pentonville').show();
    }else if (playerOneRollTotal == 6){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-visiting-jail').show();
        alert('Just Visiting!');
        playerOneEnd();
    }else if (playerOneRollTotal == 7){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Whitehall');
        $('#player1-whitehall').show();
    }else if (playerOneRollTotal == 8){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Northhumrl\'d Avenue');
        $('#player1-north').show();
    }else if (playerOneRollTotal == 9){
        hidePlayerOne();
        $('#player1-chance-1').show();
        alert('Chance!');
        playerOneEnd();
    }else if (playerOneRollTotal == 10){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Marlborough Street');
        $('#player1-marlborough').show();
    }else if (playerOneRollTotal == 11){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Vine Street');
        $('#player1-vine').show();
    }else if (playerOneRollTotal == 12){
        hidePlayerOne();
        $('#player1-free-parking').show();
        alert('Free Parking!');
        playerOneEnd();
    }else if (playerOneRollTotal == 13){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Fleet Street');
        $('#player1-fleet').show();
    }else if (playerOneRollTotal == 14){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Trafalgar Square');
        $('#player1-trafalgar').show();
    }else if (playerOneRollTotal == 15){
        hidePlayerOne();
        $('#player1-community-chest-1').show();
        alert('Community Chest!');
        playerOneEnd();
    }else if (playerOneRollTotal == 16){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Coventry Street');
        $('#player1-coventry').show();
    }else if (playerOneRollTotal == 17){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Piccaddily');
        $('#player1-piccaddily').show();
    }else if (playerOneRollTotal == 18){
        hidePlayerOne();
        $('#player1-in-jail').show();
        alert('You have gone to jail :(');
        playerOneEnd();
        playerOneRollTotal = 6;
    }else if (playerOneRollTotal == 19){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Oxford Street');
        $('#player1-oxford').show();
    }else if (playerOneRollTotal == 20){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Bond Street');
        $('#player1-bond').show();
    }else if (playerOneRollTotal == 21){
        hidePlayerOne();
        $('#player1-chance-2').show();
        alert('Chance!');
        playerOneEnd();
    }else if (playerOneRollTotal == 22){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Park Lane');
        $('#player1-park').show();
    }else if (playerOneRollTotal == 23){
        hidePlayerOne();
        playerOneTurn();
        $('#player1-property').text('Mayfair');
        $('#player1-mayfair').show();
    }else if (playerOneRollTotal == 24){
        hidePlayerOne();
        $('#player1-go').show();
    }
}

function movePlayerTwo(){
    if (playerTwoRollTotal == 1){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Old Kent Road');
        $('#player2-old-kent-1').show();
    }else if (playerTwoRollTotal == 2){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Old Kent Road');
        $('#player2-old-kent-2').show();
    }else if (playerTwoRollTotal == 3){
        hidePlayerTwo();
        $('#player2-die').hide();
        $('#player2-community-chest-2').show();
        alert('Community Chest!');
        playerTwoEnd();
    }else if (playerTwoRollTotal == 4){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('The Angel, Islington');
        $('#player2-angel').show();
    }else if (playerTwoRollTotal == 5){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Pentonville Road');
        $('#player2-pentonville').show();
    }else if (playerTwoRollTotal == 6){
        hidePlayerTwo();
        $('#player2-die').hide();
        $('#player2-visiting-jail').show();
        alert('Just Visiting!');
        playerTwoEnd();
    }else if (playerTwoRollTotal == 7){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Whitehall');
        $('#player2-whitehall').show();
    }else if (playerTwoRollTotal == 8){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Northhumrl\'d Avenue');
        $('#player2-north').show();
    }else if (playerTwoRollTotal == 9){
        hidePlayerTwo();
        $('#player2-chance-1').show();
        alert('Chance!');
        playerTwoEnd();
    }else if (playerTwoRollTotal == 10){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Marlborough Street');
        $('#player2-marlborough').show();
    }else if (playerTwoRollTotal == 11){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Vine Street');
        $('#player2-vine').show();
    }else if (playerTwoRollTotal == 12){
        hidePlayerTwo();
        $('#player2-free-parking').show();
        alert('Free Parking!');
        playerTwoEnd();
    }else if (playerTwoRollTotal == 13){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Fleet Street');
        $('#player2-fleet').show();
    }else if (playerTwoRollTotal == 14){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Trafalgar Square');
        $('#player2-trafalgar').show();
    }else if (playerTwoRollTotal == 15){
        hidePlayerTwo();
        $('#player2-community-chest-1').show();
        alert('Community Chest!');
        playerTwoEnd();
    }else if (playerTwoRollTotal == 16){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Coventry Street');
        $('#player2-coventry').show();
    }else if (playerTwoRollTotal == 17){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Piccaddily');
        $('#player2-piccaddily').show();
    }else if (playerTwoRollTotal == 18){
        hidePlayerTwo();
        $('#player2-in-jail').show();
        alert('You have gone to jail :(');
        playerTwoEnd();
        playerTwoRollTotal = 6;
    }else if (playerTwoRollTotal == 19){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Oxford Street');
        $('#player2-oxford').show();
    }else if (playerTwoRollTotal == 20){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Bond Street');
        $('#player2-bond').show();
    }else if (playerTwoRollTotal == 21){
        hidePlayerTwo();
        $('#player2-chance-2').show();
        alert('Chance!');
        playerTwoEnd();
    }else if (playerTwoRollTotal == 22){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Park Lane');
        $('#player2-park').show();
    }else if (playerTwoRollTotal == 23){
        hidePlayerTwo();
        playerTwoTurn();
        $('#player2-property').text('Mayfair');
        $('#player2-mayfair').show();
    }else if (playerTwoRollTotal == 24){
        hidePlayerTwo();
        $('#player2-go').show();
    }
}

$('#player1-buy-button').on('click',function(){
    if (playerOneRollTotal == 1){
        $('#player1-old-kent-1-small').show();
        playerOneMoney -= 60;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 2){
        $('#player1-old-kent-2-small').show();
        playerOneMoney -= 60;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 4){
        $('#player1-angel-small').show();
        playerOneMoney -= 100;
        $('#player1-player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 5){
        $('#player1-pentonville-small').show();
        playerOneMoney -= 120;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 7){
        $('#player1-whitehall-small').show();
        playerOneMoney -= 140;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 8){
        $('#player1-north-small').show();
        playerOneMoney -= 160;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 10){
        $('#player1-marlborough-small').show();
        playerOneMoney -= 180;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 11){
        $('#player1-vine-small').show();
        playerOneMoney -= 200;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 13){
        $('#player1-fleet-small').show();
        playerOneMoney -= 220;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 14){
        $('#player1-trafalger-small').show();
        playerOneMoney -= 240;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 16){
        $('#player1-coventry-small').show();
        playerOneMoney -= 260;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 17){
        $('#player1-piccaddily-small').show();
        playerOneMoney -= 280;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 19){
        $('#player1-oxford-small').show();
        playerOneMoney -= 300;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 20){
        $('#player1-bond-small').show();
        playerOneMoney -= 320;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 22){
        $('#player1-park-small').show();
        playerOneMoney -= 350;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }else if (playerOneRollTotal == 23){
        $('#player1-mayfair-small').show();
        playerOneMoney -= 400;
        $('#player1-money').text(playerOneMoney);
        playerOneEnd();
    }
});

$('#player2-buy-button').on('click',function(){
    if (playerTwoRollTotal == 1){
        $('#player2-old-kent-1-small').show();
        playerTwoMoney -= 60;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 2){
        $('#player2-old-kent-2-small').show();
        playerTwoMoney -= 60;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 4){
        $('#player2-angel-small').show();
        playerTwoMoney -= 100;
        $('#player2-player1-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 5){
        $('#player2-pentonville-small').show();
        playerTwoMoney -= 120;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 7){
        $('#player2-whitehall-small').show();
        playerTwoMoney -= 140;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 8){
        $('#player2-north-small').show();
        playerTwoMoney -= 160;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 10){
        $('#player2-marlborough-small').show();
        playerTwoMoney -= 180;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 11){
        $('#player2-vine-small').show();
        playerTwoMoney -= 200;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 13){
        $('#player2-fleet-small').show();
        playerTwoMoney -= 220;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 14){
        $('#player2-trafalger-small').show();
        playerTwoMoney -= 240;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 16){
        $('#player2-coventry-small').show();
        playerTwoMoney -= 260;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 17){
        $('#player2-piccaddily-small').show();
        playerTwoMoney -= 280;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 19){
        $('#player2-oxford-small').show();
        playerTwoMoney -= 300;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 20){
        $('#player2-bond-small').show();
        playerTwoMoney -= 320;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 22){
        $('#player2-park-small').show();
        playerTwoMoney -= 350;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }else if (playerTwoRollTotal == 23){
        $('#player2-mayfair-small').show();
        playerTwoMoney -= 400;
        $('#player2-money').text(playerTwoMoney);
        playerTwoEnd();
    }
});

function playerOneTurn(){
    $('#player1-die').hide();
    $('#player1-buy-property').show();
}

function playerTwoTurn(){
    $('#player2-die').hide();
    $('#player2-buy-property').show();
}

function playerOneEnd(){
    $('#player1-die').hide();
    $('#player1-buy-property').hide();
    $('#player2-die').show();
}

function playerTwoEnd(){
    $('#player2-die').hide();
    $('#player2-buy-property').hide();
    $('#player1-die').show();
}