console.log("Well come to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("turn.mp3");
let gameover = new Audio("gameover.mp3");
let cheering = new Audio("Cheering.mp3");
let turn = "X";

let isgameover = false;

// function to change turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// ?? Function to check for win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 1, 5, 0],
    [3, 4, 5, 1, 15, 0],
    [6, 7, 8, 1, 25, 0],
    [0, 3, 6, -8.5, 15, 90],
    [1, 4, 7, 1.5, 15, 90],
    [2, 5, 8, 11.5, 15, 90],
    [0, 4, 8, 1.5, 15, 45],
    [2, 4, 6, 1.5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " win";
      isgameover = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
      // document.querySelector(".line").style.width = "90%"
      // document.querySelector(".line").style.transform = ` translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      // document.querySelectorAll(".boxtext").style.color = "red"
      boxtext[e[0]].style.color = "red";
      boxtext[e[1]].style.color = "red";
      boxtext[e[2]].style.color = "red";
      cheering.play();
          
         

 // Automatically reset game after 5 seconds
 setTimeout(() => {
    resetGame();
 
}, 5000);

    }
  });
};

//Game Logic
music.play();
music.volume = 0.1;
music.loop = true;

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});


//  Define the resetGame function
const resetGame = () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element) => {
        element.innerText = "";
        element.style.color = "black"; // Reset the color of all box texts to black
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
    gameover.play();
};

// Add onclick listener to reset button
document.getElementById("reset").addEventListener("click", resetGame);