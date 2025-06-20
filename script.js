
const container = document.querySelector(".container");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".submit");
const header = document.querySelector(".header")
const span = document.createElement("span");
const startbtn = document.querySelector(".start");
const dialog = document.querySelector(".NewGame");
const name1 = document.createElement("div");
const name2 = document.createElement("div");
let calls = 0;

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
  const getTurn = () => turn;

  return {name, sign, getTurn, increaseTurn};

}



const DOMdisplay = (function display(){


 
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

  const updateBoardGrid = (function (board){

    
      container.innerHTML = ""; 
      header.innerHTML = "";
    
      for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
          board[i][j] = " ";
          const cell = document.createElement("button");
          cell.classList.add("cell");
          cell.setAttribute("row", i);
          cell.setAttribute("column", j);
          cell.textContent = " ";
    
          container.appendChild(cell);
        }
      }
    })
    
  

     return {BoardGrid, updateBoardGrid };
 
 })()

 startbtn.addEventListener("click", ()=> {

        dialog.showModal(); 

 });

 
  DOMdisplay.BoardGrid();
  

  closeButton.addEventListener("click", ()=> {
    dialog.close();
})


submitButton.addEventListener("click", (e)=> {

  if(calls){
      
    DOMdisplay.updateBoardGrid(Gameboard.board);
    
  }
  name1.textContent = document.querySelector("#player1").value;
  name2.textContent = document.querySelector("#player2").value;
  
  span.append(name1);
  span.append(name2);
  startbtn.textContent = "Restart";
  header.append(span);
 
  calls++;

  dialog.close( playGame(name1.textContent, name2.textContent));
 
  


})

 function playGame(name1, name2){
  let result = false;
   let board = Gameboard.board;

  const player1 = createPlayer(name1, "X");
  const player2 = createPlayer(name2, "O");
  
  function checkTurn (){
    if(player1.getTurn()  > player2.getTurn())
      return player2;
    else
      return player1;
  }

  const cells = document.querySelectorAll(".cell");
  let announcement = 0;
  
  cells.forEach((cell) => {

    
    cell.addEventListener("click", (e)=>{
    
    
      if(board[cell.getAttribute("row")][cell.getAttribute("column")] !== " "){
        return;
      }
      else{
        
        result = handleclick(cell);
       
       if(result && !announcement){
        const div = document.createElement("div");
        div.textContent = result;
        header.append(div);
        announcement++;
        return;

      }
      else if(result){

        return;s
      }
      
      
      
      
      }
      checkTurn().increaseTurn();
  });

});

   
  function handleclick(e){
    if(result){
    
      return result;

    }
    else{
    let current = checkTurn();
    board[e.getAttribute("row")][e.getAttribute("column")] = current.sign;
     result =  checkWinner(board, current);
    e.textContent = current.sign;
    if(e.textContent === "X")
      e.style.cssText = "color: red;";
    return result;
    }
  
  }

 }

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

 
