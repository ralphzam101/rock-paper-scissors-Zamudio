// element
let youScore = 1;
let aiScore = 1;

let imgRock = '<img src="assets/images/rock.png">';
let imgPaper = '<img src="assets/images/paper.png">';
let imgScissors = '<img src="assets/images/scissors.png">';

let historyMatch = document.querySelector("#historyMatch");

//  buttons
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");



// events
rockBtn.addEventListener("click", rockFunction);
paperBtn.addEventListener("click", paperFunction);
scissorsBtn.addEventListener("click", scissorsFunction);


// array
let botPick = ["Rock", "Paper", "Scissors"];
let i ="";

// functions
function botSelect() {
  i = Math.floor(Math.random() * 3);

  return i;
}

function rockFunction() {
  botSelect();

    let matchDiv = document.createElement("div");
    let matchShow = document.createElement("input");
    matchDiv.classList.add("match-div");

    matchShow.classList.add("match-show");
    matchShow.setAttribute("disabled", "");

   
    historyMatch.appendChild(matchDiv);
    matchDiv.appendChild(matchShow);

  if (i == 0) {
    document.getElementById("result").innerHTML = "It's a tie";
    document.getElementById("youPlay").innerHTML = imgRock;
    document.getElementById("aiPlay").innerHTML = imgRock;
  
    matchShow.setAttribute("value","ROCK vs ROCK");
 
  } else if (i == 1) {
    document.getElementById("result").innerHTML =  "You LOSE";
    document.getElementById("youPlay").innerHTML = imgRock;
    document.getElementById("aiPlay").innerHTML = imgPaper;
    document.getElementById("aiScore").innerHTML = aiScore++;

    matchShow.setAttribute("value","ROCK vs PAPER");
    matchShow.style.backgroundColor = "red";
    matchShow.style.color = "white";
 

  } else if (i == 2) {
    document.getElementById("result").innerHTML = "You WIN";
    document.getElementById("youPlay").innerHTML = imgRock;
    document.getElementById("aiPlay").innerHTML = imgScissors;
    document.getElementById("youScore").innerHTML = youScore++;

    matchShow.setAttribute("value","ROCK vs SCISSORS");
    matchShow.style.backgroundColor = "lightblue";

  } else {
    console.log("err");
  }
}

function paperFunction() {
  botSelect();

    let matchDiv = document.createElement("div");
    let matchShow = document.createElement("input");
    matchDiv.classList.add("match-div");
    matchShow.classList.add("match-show");
    matchShow.setAttribute("disabled", "");
    historyMatch.appendChild(matchDiv);
    matchDiv.appendChild(matchShow);

  if (i == 0) {
    document.getElementById("result").innerHTML = "You WIN";
    document.getElementById("youPlay").innerHTML = imgPaper;
    document.getElementById("aiPlay").innerHTML = imgRock;
    document.getElementById("youScore").innerHTML = youScore++;

    matchShow.setAttribute("value","PAPER vs ROCK");
    matchShow.style.backgroundColor = "lightblue";

  } else if (i == 1) {
    document.getElementById("result").innerHTML = "It's a tie";
    document.getElementById("youPlay").innerHTML = imgPaper;
    document.getElementById("aiPlay").innerHTML = imgPaper;

    matchShow.setAttribute("value","PAPER vs PAPER");
  } else if (i == 2) {
    console.log("Bot picked scissors. You lose");
    document.getElementById("result").innerHTML =  "You LOSE";
    document.getElementById("youPlay").innerHTML = imgPaper;
    document.getElementById("aiPlay").innerHTML = imgScissors;
    document.getElementById("aiScore").innerHTML = aiScore++;

    matchShow.setAttribute("value","PAPER vs SCISSORS");
    matchShow.style.backgroundColor = "red";
    matchShow.style.color = "white";
    
  } else {
    console.log("err");
  }
}

function scissorsFunction() {
  botSelect();

    let matchDiv = document.createElement("div");
    let matchShow = document.createElement("input");
    matchDiv.classList.add("match-div");
    matchShow.classList.add("match-show");
    matchShow.setAttribute("disabled", "");
    historyMatch.appendChild(matchDiv);
    matchDiv.appendChild(matchShow);

  if (i == 0) {
    document.getElementById("result").innerHTML =  "You LOSE";
    document.getElementById("youPlay").innerHTML = imgScissors;
    document.getElementById("aiPlay").innerHTML = imgRock;
    document.getElementById("aiScore").innerHTML = aiScore++;

    matchShow.setAttribute("value","SCISSORS vs ROCK");
    matchShow.style.backgroundColor = "red";
    matchShow.style.color = "white";
  } else if (i == 1) {
    document.getElementById("result").innerHTML = "You WIN";
    document.getElementById("youPlay").innerHTML = imgScissors;
    document.getElementById("aiPlay").innerHTML = imgPaper;
    document.getElementById("youScore").innerHTML = youScore++;

    matchShow.setAttribute("value","SCISSORS vs PAPER");
    matchShow.style.backgroundColor = "lightblue";
  } else if (i == 2) {
    document.getElementById("result").innerHTML = "It's a tie";
    document.getElementById("youPlay").innerHTML = imgScissors;
    document.getElementById("aiPlay").innerHTML = imgScissors;

    matchShow.setAttribute("value","SCISSORS vs SCISSORS");
  } else {
    console.log("err");
  }
}

