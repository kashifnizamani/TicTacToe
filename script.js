
function Cell(sign){

  return sign

}

 const Gameboard =(function () {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(Cell(" "));
      }
    }

    return {board, rows, columns };
})();




function createPlayer(name, sign){

  let turn = 0;
  const increaseTurn = () => turn++;
  const giveTurn = () => turn;
  
  
  const player = name;

  return {name, sign, giveTurn, increaseTurn};



}


function playGame(){
  const player1 = createPlayer("kashif", "X");
  const player2 = createPlayer("fahad", "O");
  let board = Gameboard.board;
  let checkWinner = false;
 

 
 

  while(!checkWinner){
  if(player1.giveTurn() > player2.giveTurn())
      checkWinner = takeTurn(board, player2);
    else
      checkWinner = takeTurn(board, player1);
}
console.log(checkWinner);
display(board);
  
}



function takeTurn(board, player){
  
    const pos = giveposition(player);

    if(board[pos.num1][pos.num2] === " "){
    board[pos.num1][pos.num2] = Cell(player.sign);
    }
    else
    console.log("please choose a different position")

    let won = checkWinner(board, player);
   
    player.increaseTurn();
    return won;
  

}


   
 function giveposition(){
let num1, num2;
  for (var a = [0, 1, 2], i = a.length; i--; ) {
    num1 = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    
}
for (var a = [0, 1, 2], i = a.length; i--; ) {
    num2 = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];

}
return {num1, num2};

 }

 function checkWinner(board, player){
  
 
  for(let i=0; i<3; i++) {
    if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === player.sign) {
        
      return ( player.name + " Won");
      
    }
}

for(let i=0; i<3; i++) {
  if(board[0][i] === board[1][i] && board[2][i] === board[1][i] && board[0][i] === player.sign) {
    
    return (player.name + "Won");

  }
}
  
if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] === player.sign) {
   
  return ( player.name + " Won");

}

if(board[2][0] === board[1][1] && board[0][2] === board[1][1] && board[2][0] === player.sign) {
 
  return ( player.name + " Won");
  
}

if(draw(board)) 
  return ("Game Over - No one wins");

   return false;


 }
 
function draw(board) {
   let draw = true;
 for(let i=0; i<=2; i++) {
     for(let j=0; j<=2; j++) {
         if(board[i][j] === " ") draw = false;
     }
 }
 return draw;
}

function display(board){

 const container = document.querySelector(".container");

 const displayBoadGrid = (function (){
    const DOMboard = []
  for(let i = 0; i < 3; i++){

     for(let j = 0; j < 3; j++){
      const cell = document.createElement("button");
      cell.classList.add("cell");
      cell.textContent = board[i][j];
      container.appendChild(cell);

     }
  }

 })()

   

}



console.log(Gameboard.board);
 playGame();