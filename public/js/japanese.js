var homeBtn = document.getElementById("home");
var reviewBtn = document.getElementById("review");
var retryBtn = document.getElementById("retry");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var currentQuestion = 0;
var lastQuestion = 4;
var questionList = document.getElementById("question-" + currentQuestion)


homeBtn.addEventListener("click", redirectToHome());
reviewBtn.addEventListener("click", redirectToReview());
retryBtn.addEventListener("click", retryLesson());
startBtn.addEventListener("click", startLesson());
submitBtn.addEventListener("click", checkAnswer());


function startLesson() {
    startBtn.style.display = "none";
    questionList.style.display = "block";
}

function hideQuestions() {
    for (let i = 0; i < 4; i++) {
        let hideQuestion = document.getElementById("question-" + currentQuestion).style.display = "hidden"
    }
}

function checkAnswer() {
    for (let i = 0; i < 4; i++) {
        let inputElement = document.getElementById("answer-q" + currentQuestion + "-a" + i);
        if (inputElement.checked) {
            displayButton()
            if (inputElement.getAttribute("data-is-correct") == "true") {
                finalScore += 20;
            }

            displayQuestions();
            currentQuestion++;
            submitBtn.style.display = "none"
            if (currentQuestion > lastQuestion) {
                questionList.style.display = "none";
                results.style.display = "block";
            }

            return;
        }
    }
}

function displayButton() {
    submitBtn.style.display = "block"
}

function redirectToHome() {
    window.location.href ="/"
}

function redirectToReview() {
    window.location.href ="/reviews"
}

function retryLesson() {
    window.location.reload()
}