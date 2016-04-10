// Set currentPlayer to 1 on page load
// when start game button is clicked, an alert pops up to tell player 1 to select a square

// numSquaresClicked()

var numSquaresClicked = 0;
////This function shows who's turn it is by looking at the text on the span with the ID of currentPlayer/////////////

function showPlayer(){
  var currentPlayer = $('#currentPlayer').text();
  return currentPlayer;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This function calls the value returned in showPlayer() and places it into the variable currentPlayer,
//and returns that player number back into the span with the id of currentPlayer//////////////////////////////////////

function switchPlayer(){
  var currentPlayer = showPlayer();
  if (currentPlayer == '1'){
    currentPlayer = '2';
    return $('#currentPlayer').text(currentPlayer);
  }else if (currentPlayer == '2'){
    currentPlayer = '1';
    return $('#currentPlayer').text(currentPlayer);
  }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function makeMove(square,value){
  square.text(value);
  numSquaresClicked += 1;
}

//Event listener placed on square1, that fires off on 'click'

$('#square1, #square2, #square3, #square4, #square5, #square6, #square7, #square8, #square9').click(function(){

  var square = $(this).text();
  if (square !== 'X' && square !== 'O'){
    var player = showPlayer();
    if (player == 1){
        switchPlayer();
        makeMove($(this),"X");
    }else{
      switchPlayer();
      makeMove($(this),"O");
    }
  }else{
    alert("You can't move here");
  }
});

// Event listener placed on the button to start a new game

$('#startGameButton').click(function(){
  document.location.reload();
});




///Check for row Winner!////////////////////////

function checkforWin(){

  square1 = $('#square1').text();
  square2 = $('#square2').text();
  square3 = $('#square3').text();
  square4 = $('#square4').text();
  square5 = $('#square5').text();
  square6 = $('#square6').text();
  square7 = $('#square7').text();
  square8 = $('#square8').text();
  square9 = $('#square9').text();

  var winner;
  player = $('#currentPlayer').text();
  if (player == '1'){
    winner = '2';}
    else{
      winner = '1';
    }

    var win = false;
  //check for win

  if (square1 == square2 && square2 == square3){
    alert("Player " + winner + " Wins!");
    alert("topRow");
    win = true;

  }else if(square4 == square5 && square5 == square6){
    alert("Player " + winner + " Wins!");
    alert("Middle Row");
    win = true;

  }else if(square7 == square8 && square8 == square9){
    alert("Player " + winner + " Wins!");
    alert("Bottom Row");
    win = true;

  }else if (square1 == square4 && square4 == square7){
    alert("Player " + winner + " Wins!");
    alert("First Column");
    win = true;

    }else if (square2 == square5 && square5 == square8){
      alert("Player " + winner + " Wins!");
      alert("Second Column");
      win = true;

    }else if(square3 == square6 && square6 == square9){
      alert("Player " + winner + " Wins!");
      alert("Third Column");
      win = true;

    }else if(square1 == square5 && square5 == square9){
      alert("Player " + winner + " Wins!");
      alert("Diagonal 1");
      win = true;

    }else if(square3 == square5 && square5 == square7){
      alert("Player " + winner + " Wins!");
      alert("Diagonal 2");
      win = true;
    };

    if(win !== true && numSquaresClicked == 9){
      alert("Cat's Game");
    };
  };








// Event Listeners for Player Click on a Square




$('#Player1Button').click(function(){
  alert('player 1 button clicked!');
});

$('#Player2Button').click(function(){
  alert('player 2 button clicked!');
});
