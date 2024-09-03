const questions = [ 

  { 

    question: "1. What is the capital of France?", 

    options: ["Paris", "London", "Berlin", "Madrid"], 

    correct: 0, 

  }, 

  { 

    question: "Which planet is known as the Red Planet?", 

    options: ["Earth", "Mars", "Jupiter", "Saturn"], 

    correct: 1, 

  }, 

  { 

    question: "What is the largest planet in our solar system?", 

    options: ["Earth", "Mars", "Jupiter", "Saturn"], 

    correct: 2, 

  }, 

  { 

    question: "Which planet is known as the Red Planet?", 

    options: ["Earth", "Mars", "Jupiter", "Saturn"], 

    correct: 1, 

  }, 

  { 

    question: "Which planet is closest to the Sun?", 

    options: ["Mercury", "Venus", "Earth", "Mars"], 

    correct: 0, 

  }, 

  { 

    question: "Which planet is known as the Red Planet?", 

    options: ["Earth", "Mars", "Jupiter", "Saturn"], 

    correct: 1, 

  }, 

  { 

    question: "Which planet is known for its prominent ring system?", 

    options: ["Jupiter", "Saturn", "Uranus", "Neptune"], 

    correct: 1, 

  }, 

  { 

    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?", 

    options: ["Venus", "Mars", "Mercury", "Jupiter"], 

    correct: 0, 

  }, 

  { 

    question: "Which planet has the tallest volcano in the solar system?", 

    options: ["Mars", "Venus", "Earth", "Mercury"], 

    correct: 0, 

  }, 

  { 

    question: "Which planet is known for having a Great Red Spot?", 

    options: ["Mars", "Jupiter", "Saturn", "Uranus"], 

    correct: 1, 

  }, 

  { 

    question: "Which planet is famous for its blue color due to methane in its atmosphere?", 

    options: ["Neptune", "Uranus", "Saturn", "Jupiter"], 

    correct: 0, 

  }, 

  { 

    question: "Which planet is known for having a day that is longer than its year?", 

    options: ["Venus", "Earth", "Mars", "Jupiter"], 

    correct: 0, 

  }, 

  { 

    question: "Which planet has the most moons?", 

    options: ["Saturn", "Jupiter", "Uranus", "Neptune"], 

    correct: 1, 

  }, 

  { 

    question: "Which planet is named after the Roman god of the sea?", 

    options: ["Uranus", "Neptune", "Saturn", "Jupiter"], 

    correct: 1, 

  }, 

]; 

  

let currentQuestion = 0; 

let timer; 

let timeLeft = 30; 

let points = 0; 

  

function loadQuestion() { 

  document.getElementById("question").innerText = questions[currentQuestion].question; 

  const options = document.querySelectorAll(".option"); 

  options.forEach((option, index) => { 

    option.innerText = questions[currentQuestion].options[index]; 

    option.style.display = "block"; // Reset display for 50-50 

    option.style.backgroundColor = ""; // Reset background color for options 

  }); 

  resetTimer(); 

} 

  

function checkAnswer(answer) { 

  if (answer === questions[currentQuestion].correct) { 

    alert("Correct Answer!"); 

    updateMoneyLadder(); 

    points += 1000 * (currentQuestion + 1); // Increment points based on the question number 

    updatePointsDisplay(); 

    currentQuestion++; 

    if (currentQuestion < questions.length) { 

      loadQuestion(); 

    } else { 

      alert("Congratulations! You've completed the quiz."); 

      clearInterval(timer); 

    } 

  } else { 

    alert("Wrong Answer! Game Over."); 

    showWrongAnswer(answer); 

    clearInterval(timer); 

  } 

} 

  

function updatePointsDisplay() { 

  document.getElementById("pointsDisplay").innerText = `Points: ${points}`; 

} 

  

function showWrongAnswer(answer) { 

  const options = document.querySelectorAll(".option"); 

  options[answer].style.backgroundColor = "#f8d7da"; // Mark wrong answer in red 

  const ladderItems = document.querySelectorAll(".money-ladder li"); 

  ladderItems.forEach((item, index) => { 

    if (index === ladderItems.length - 1 - currentQuestion) { 

      item.style.backgroundColor = "#f8d7da"; // Mark the level in red for a wrong answer 

    } 

  }); 

} 

  

function updateMoneyLadder() { 

  const ladderItems = document.querySelectorAll(".money-ladder li"); 

  ladderItems[ladderItems.length - 1 - currentQuestion].classList.remove("current"); 

  if (currentQuestion < ladderItems.length - 1) { 

    ladderItems[ladderItems.length - 2 - currentQuestion].classList.add("current"); 

  } 

} 

  

function resetTimer() { 

  clearInterval(timer); 

  timeLeft = 30; 

  document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`; 

  timer = setInterval(() => { 

    timeLeft--; 

    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`; 

    if (timeLeft <= 0) { 

      alert("Time's up! Game Over."); 

      clearInterval(timer); 

    } 

  }, 1000); 

} 

  

function useFiftyFifty() { 

  const options = document.querySelectorAll(".option"); 

  let incorrectAnswers = []; 

  options.forEach((option, index) => { 

    if (index !== questions[currentQuestion].correct) { 

      incorrectAnswers.push(option); 

    } 

  }); 

  incorrectAnswers.sort(() => Math.random() - 0.5); 

  incorrectAnswers.slice(0, 2).forEach(option => option.style.display = "none"); 

  document.getElementById("fiftyFifty").disabled = true; 

} 

  

function usePhoneFriend() { 

  alert("Phone a Friend used! Hint: The correct answer is likely '" + questions[currentQuestion].options[questions[currentQuestion].correct] + "'."); 

  document.getElementById("phoneFriend").disabled = true; 

} 

  

function useAudiencePoll() { 

  alert("Audience Poll used! The majority of the audience votes for option '" + questions[currentQuestion].options[questions[currentQuestion].correct] + "'."); 

  document.getElementById("audiencePoll").disabled = true; 

} 

  

loadQuestion(); 

 