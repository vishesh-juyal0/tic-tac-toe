let winningPattern = [
  [0, 3, 6],
  [0, 1, 2],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let resetBtn = document.getElementById("resetBtn");
let boxes = document.querySelectorAll(".box");
let turnO = false;
let winnerBoard = document.getElementById("winnerDisp");
let newGame=document.getElementById("newGameBtn");

changeBg(turnO);
resetBtn.addEventListener("click", reset);
newGame.addEventListener("click", reset);

boxes.forEach((box) => [
  box.addEventListener("click", () => {
    setBoxValue(box);
    checkWinner();
  }),
]);

function checkWinner() {
  for (let pattern of winningPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos1 == pos2 && pos2 == pos3) {
      winnerBoard.style.visibility = "visible";
      winnerBoard.innerText = `winner ${pos1}`;
      setDisability(true);

      break;
    }
  }
}

function setBoxValue(box) {
  if (turnO && box.innerText == "") {
    box.innerText = "O";
    changeBg(turnO);
    turnO = false;
    
  } else if (turnO == false && box.innerText == "") {
    box.innerText = "X";
    changeBg(turnO);
    turnO = true;

  }
  box.disabled = true;
}
function reset() {
 // turnO = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    winnerBoard.innerText = "";
    turnO=false;
    changeBg(turnO);
     
  });
}

function setDisability(disable) {
  boxes.forEach((box) => {
    box.disabled = disable;
  });
}

function changeBg(turnO) {
  if (turnO) {
    // O's turn => highlight O
    playerO.style.backgroundColor = "#61b500"; // green
    playerX.style.backgroundColor = "#ada294"; // grey
  } else {
    // X's turn => highlight X
    playerX.style.backgroundColor = "#61b500"; // green
    playerO.style.backgroundColor = "#ada294"; // grey
  }
}
