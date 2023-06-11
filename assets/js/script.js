
var timerEl = document.getElementById("timer");
var startDiv = document.getElementById("start");
var startEl = document.getElementById("start-btn");
var questionEl = document.getElementById("question");
var questionDiv = document.getElementById("question-div");
var answerEl = document.getElementById("answer");
var scoreEl = document.getElementById("view-scores");
var finalScoreEl = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var gameEndEl = document.getElementById("game-over");
var highScoreBtnEl = document.getElementById("view-scores-btn");
var clearScoreBtnEl = document.getElementById("clear-scores-btn");
var submitScoreBtnEl = document.getElementById("submit-score-btn");
var displayInitEl = document.getElementById("display-initials");
var displayScoreEl = document.getElementById("display-score");
var highScoreLink = document.getElementById("view-scores-link");
var mainEl = document.getElementById("main-screen");

var time = 61; 
var answerSet = [];
var correct = 0;
var incorrect = 0; 
var questionNumber = 1;
var timeCondition = false; 

gameEndEl.style.display = "none"; 
questionDiv.style.display = "none";
scoreEl.style.display = "none";

var answer1 = ["var variable_name = Hi;", "var variable_name = 'Hi';", "var variable_name = ['Hi'];", "variable_name = 'Hi'"];
var answer2 = ["for(var i = 0; i < 30; i++) {}", "for(var i = 0, i < 30, i++) {}", "for(i = 0; i < 30; i++) {}", "for(i =0, i <30, i++) {}"];
var answer3 = ["groceryProducts[index];", "groceryProducts[i];", "groceryProducts[3];", "groceryProducts[2];"];
var answer4 = ["console.log(genre(music));", "console.log(music.genre);", "console.log(music(genre));", "console.log(genre.music);"];
var answer5 = ["Document Object Model", "Domain Object Methods", "Domain Object Model", "Document Object Methods"];
var answer6 = ["<button id= 'start-btn'></div>", "<div class = 'start-btn'></div>", "<button class= 'start-btn'></div>", "<div id = 'btn'></div>"];

function displayQuestion() {
  
  li1.textContent = answerSet[0];
  li2.textContent = answerSet[1];
  li3.textContent = answerSet[2];
  li4.textContent = answerSet[3];

  answerEl.appendChild(li1);
  answerEl.appendChild(li2);
  answerEl.appendChild(li3);
  answerEl.appendChild(li4);
}


var li1 = document.createElement("button");
var li2 = document.createElement("button");
var li3 = document.createElement("button");
var li4 = document.createElement("button");


li1.setAttribute("class", "answer-btn");
li2.setAttribute("class", "answer-btn");
li3.setAttribute("class", "answer-btn");
li4.setAttribute("class", "answer-btn");


function setTime() {
  var timerInterval = setInterval(function () {
    time--;
    timerEl.textContent = time + " :Seconds Remaining";
    if (time === 0) {
      clearInterval(timerInterval); 
      timerEl.textContent = "";
      gameOver();
    }

    if (questionNumber > 6) {
      clearInterval(timerInterval); 
      timerEl.textContent = "";
      gameOver();
    }

    
    if (incorrect > 0 && timeCondition) {
      time = time - 10;
      timeCondition = false; 
    }
  }, 1000);
}


startEl.addEventListener("click", function () {
  setTime();
  generateQuestion();
  gameEndEl.style.display = "none";
  questionDiv.style.display = "block";
}, 1000);


li1.addEventListener("click", function () {
  if (li1.textContent === "var variable_name = 'Hi';" || li1.textContent === "for(var i = 0; i < 30; i++) {}" || li1.textContent === "groceryProducts[2];" || li1.textContent === "console.log(music.genre);" || li1.textContent === "Document Object Model" || li1.textContent === "<button id= 'start-btn'></div>") {
    correct += 1;
    questionNumber++;
    generateQuestion();
  } else {
    incorrect += 1;
    questionNumber++;
    timeCondition = true; 
    generateQuestion();
  }

}, 1000);

li2.addEventListener("click", function () {
  if (li2.textContent === "for(var i = 0; i < 30; i++) {}" || li2.textContent === "groceryProducts[2];" || li2.textContent === "console.log(music.genre);" || li2.textContent === "Document Object Model" || li2.textContent === "<button id= 'start-btn'></div>") {
    correct += 1;
    questionNumber++;
    generateQuestion();
  } else {
    incorrect += 1;
    questionNumber++;
    timeCondition = true;
    generateQuestion();
  }
}, 1000);

li3.addEventListener("click", function () {
  if (li3.textContent === "var variable_name = 'Hi';" || li3.textContent === "for(var i = 0; i < 30; i++) {}" || li3.textContent === "groceryProducts[2];" || li3.textContent === "console.log(music.genre);" || li3.textContent === "Document Object Model" || li3.textContent === "<button id= 'start-btn'></div>") {
    correct += 1;
    questionNumber++;
    generateQuestion();
  } else {
    incorrect += 1;
    questionNumber++;
    timeCondition = true;
    generateQuestion();
  };
}, 1000);

li4.addEventListener("click", function () {
  if (li4.textContent === "var variable_name = 'Hi';" || li4.textContent === "for(var i = 0; i < 30; i++) {}" || li4.textContent === "groceryProducts[2];" || li4.textContent === "console.log(music.genre);" || li4.textContent === "Document Object Model" || li4.textContent === "<button id= 'start-btn'></div>") {
    correct += 1;
    questionNumber++;
    generateQuestion();
  } else {
    incorrect += 1;
    questionNumber++;
    timeCondition = true;
    generateQuestion();
  }
}, 1000);


function generateQuestion() {
  if (questionNumber === 1) {
    questionEl.textContent = "1. What is the proper way to declare a string variable containing the message Hi? ________";
    
    answerSet = answer1.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();
  }

  if (questionNumber === 2) {
    questionEl.textContent = "2. Which one of these statements is properly declared?";
    answerSet = answer2.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();
  }

  if (questionNumber === 3) {

    questionEl.textContent = "3. A list of grocery products have been declared in an array -\n var groceryProducts = ['Eggs', 'Milk', 'Cheese', 'Bacon'];\n Select the statement that would get Cheese from the array. _______________";
    answerSet = answer3.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();

  }

  if (questionNumber === 4) {
    questionEl.textContent = "4. Console log the genre which belongs to the music object. _________";
    answerSet = answer4.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();

  }

  if (questionNumber === 5) {
    questionEl.textContent = "5. What does DOM stand for? ________"
    answerSet = answer5.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();


  }

  if (questionNumber === 6) {
    questionEl.textContent = "6. What div is this statement accessing document.getElementByID('start-btn');? _______"
    answerSet = answer6.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    displayQuestion();

  }
}

function gameOver() {
  
  startDiv.style.display = "none"; 
  gameEndEl.style.display = "block"; 
  questionDiv.style.display = "none"; 
  scores();
}

function scores() {
  localStorage.setItem("score", correct);
  finalScoreEl.textContent = "Your final Score is: " + correct;
}

submitScoreBtnEl.addEventListener("click", function (event) {
  event.preventDefault();

  var enteredInitials = document.querySelector("#initials").value;

  if (enteredInitials === "") {
    alert("Error Initials cannot be blank");
    return;
  } 
  var retrieveInitials = localStorage.getItem("initials");

  var newInitials = enteredInitials + "-" + correct;

  if(retrieveInitials) {
  
    newInitials += ", " + retrieveInitials;
  }

  localStorage.setItem("initials", newInitials);
})

highScoreBtnEl.addEventListener("click", function() {
  scoreEl.style.display = "block";
  var retrieveInitials1 = localStorage.getItem("initials");
  displayInitEl.textContent = retrieveInitials1;
});


clearScoreBtnEl.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
})


highScoreLink.addEventListener("click", function () {
  scoreEl.style.display = "block";
  var retrieveInitials2 = localStorage.getItem("initials");
  displayInitEl.textContent = retrieveInitials2;
})

mainEl.addEventListener("click", function() {
  location.reload();
})