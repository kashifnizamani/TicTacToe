
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

    return {board, };
})();

console.log(Gameboard.board);


function createPlayer(name, sign){

  let turn = 0;
  const increaseTurn = () => turn++;
  const giveTurn = () => turn;
  
  
  const player = name;

  return {name, sign, giveTurn, increaseTurn};



}

const player1 = createPlayer("kashif", "X");
const player2 = createPlayer("fahad", "O");

function playGame(){

  if(player1.giveTurn() > player2.giveTurn())
     takeTurn(player2);
    else
      takeTurn(player1);

}

function takeTurn(player){

    const pos = giveposition();

    board = Gameboard.board;
    board[pos.num1][pos.num2] = Cell(player.sign);
   
    player.increaseTurn();
  

}
playGame();
playGame();
playGame();
playGame();
playGame();
playGame();

   
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

 console.log(giveposition().num1);
 console.log(giveposition().num2);

 