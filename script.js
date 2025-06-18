
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

let board = Gameboard.board;



function createPlayer(name, sign){

  let turn = 0;
  const increaseTurn = () => turn++;
  const getTurn = () => turn;
  
  
  const player = name;

  return {name, sign, getTurn, increaseTurn};

}



const DOMdisplay = (function display(){

  const container = document.querySelector(".container");
 
  const BoardGrid = (function (){  
   for(let i = 0; i < 3; i++){
 
      for(let j = 0; j < 3; j++){
       const cell = document.createElement("button");
       cell.classList.add("cell");
       cell.setAttribute("row", i);
       cell.setAttribute("column", j);
 
       container.appendChild(cell);
 
      }
   }
   
 
  })
     return {BoardGrid, };
 
    
 
 })()
 
 DOMdisplay.BoardGrid();
 

 function playGame(){

  const player1 = createPlayer("kashif", "X");
  const player2 = createPlayer("bot", "O");

  function checkTurn (){
    if(player1.getTurn()  > player2.getTurn())
      return player2;
    else
      return player1;
  }

  const cells = document.querySelectorAll(".cell");
  let gameover = false;
  let result = checkWinner(board, checkTurn());
  cells.forEach((cell) => {

    
    cell.addEventListener("click", (e)=>{
    
      if(result){
        alert(result)
        return
      }
      else if(board[cell.getAttribute("row")][cell.getAttribute("column")] !== " "){
        return;
      }
      else{
       result = handleclick(cell);
       checkTurn().increaseTurn();
      
      }
  });

});

  function handleclick(e){
    let current = checkTurn();
        e.textContent = current.sign;
        board[e.getAttribute("row")][e.getAttribute("column")] = e.textContent;
        
        return checkWinner(board, current);
        
      
  }


  




 }

 playGame();

// dont mess up code below this for now;

 



 function checkWinner(board, player){
  
 
  for(let i=0; i<3; i++) {
    if(board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] === player.sign) {
        
      return ( player.name + " Won");
      
    }
}

for(let i=0; i<3; i++) {
  if(board[0][i] === board[1][i] && board[2][i] === board[1][i] && board[0][i] === player.sign) {
    
    return (player.name + " Won");

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

 
