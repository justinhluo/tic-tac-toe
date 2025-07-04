const topLeft = document.querySelector(".top-left");
const topMid = document.querySelector(".top-mid");
const topRight = document.querySelector(".top-right");
const midLeft = document.querySelector(".mid-left");
const midMid = document.querySelector(".mid-mid");
const midRight = document.querySelector(".mid-right");
const botLeft = document.querySelector(".bot-left");
const botMid = document.querySelector(".bot-mid");
const botRight = document.querySelector(".bot-right");
const modalText = document.getElementById("modal-text");
const modal = document.querySelector("dialog");
const playAgain = document.getElementById("play-btn");
let curPlayer = "X";
let moves = 0;
const board = new Array(9).fill("");

topLeft.addEventListener("click", () => {
    
    board[0] = curPlayer;
    play(topLeft);
});
topMid.addEventListener("click", () => {
    
    board[1] = curPlayer;
    play(topMid);
});
topRight.addEventListener("click", () => {
    
    board[2] = curPlayer;
    play(topRight);
});
midLeft.addEventListener("click", () => {
    
    board[3] = curPlayer;
    play(midLeft);
});
midMid.addEventListener("click", () => {
    
    board[4] = curPlayer;
    play(midMid);
});
midRight.addEventListener("click", () => {
    
    board[5] = curPlayer;
    play(midRight);
});
botLeft.addEventListener("click", () => {
    
    board[6] = curPlayer;
    play(botLeft);
});
botMid.addEventListener("click", () => {
    
    board[7] = curPlayer;
    play(botMid);
});
botRight.addEventListener("click", () => {
    
    board[8] = curPlayer;
    play(botRight);
});

playAgain.addEventListener("click", () => {
    modal.close();
    board.fill("");
    moves = 0;              
    curPlayer = "X"; 
    document.querySelectorAll(".used").forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("used");
  });
});


function play(space) {
    
    space.textContent = curPlayer;
    space.classList.add("used");
    moves++; 

    if(moves >=5 ) {

        checkWinner();
    }

    if(curPlayer == "X") {
        curPlayer = "O";
    }else {
        curPlayer = "X";
    }
}

function checkWinner() {
    if((board[0] !== "" && board[0] === board[1] && board[1] === board[2]) || (board[3] !== "" && board[3] === board[4] && board[4] === board[5])
     ||(board[6] !== "" && board[6] === board[7] && board[7] === board[8]) || (board[0] !== "" && board[0] === board[3] && board[3] === board[6])
     ||(board[1] !== "" && board[1] === board[4] && board[4] === board[7]) || (board[2] !== "" && board[2] === board[5] && board[5] === board[8])
     || (board[0] !== "" && board[0] === board[4] && board[4] === board[8])||(board[2] !== "" && board[2] === board[4] && board[4] === board[6])) {
        modalText.textContent = "Winner is " + curPlayer;
        modal.showModal(); 
        
    } else if(moves == 9) {
        modalText.textContent = "Draw";
        modal.showModal(); 
    }
}