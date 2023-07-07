<<<<<<< HEAD
var homeBtn = document.getElementById('home');
var reviewBtn = document.getElementById('review');
var retryBtn = document.getElementById('retry');
var startBtn = document.getElementById('start');
var submitBtn = document.getElementById('submit');
var results = document.getElementById('results');
var finalScore = document.getElementById('finalScore');
var currentQuestion = 0;
var lastQuestion = 4;
var questionList = document.getElementById('question-' + currentQuestion);

homeBtn.addEventListener('click', redirectToHome());
reviewBtn.addEventListener('click', redirectToReview());
retryBtn.addEventListener('click', retryLesson());
startBtn.addEventListener('click', startLesson());
submitBtn.addEventListener('click', checkAnswer());

function startLesson() {
    startBtn.style.display = 'none';
    questionList.style.display = 'block';
=======
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
>>>>>>> b080c34bcce0cd915712186d33ae367e3254e982
}

function hideQuestions() {
    for (let i = 0; i < 4; i++) {
<<<<<<< HEAD
        let hideQuestion = (document.getElementById(
            'question-' + currentQuestion
        ).style.display = 'hidden');
=======
        let hideQuestion = document.getElementById("question-" + currentQuestion).style.display = "hidden"
>>>>>>> b080c34bcce0cd915712186d33ae367e3254e982
    }
}

function checkAnswer() {
    for (let i = 0; i < 4; i++) {
<<<<<<< HEAD
        let inputElement = document.getElementById(
            'answer-q' + currentQuestion + '-a' + i
        );
        if (inputElement.checked) {
            displayButton();
            if (inputElement.getAttribute('data-is-correct') == 'true') {
=======
        let inputElement = document.getElementById("answer-q" + currentQuestion + "-a" + i);
        if (inputElement.checked) {
            displayButton()
            if (inputElement.getAttribute("data-is-correct") == "true") {
>>>>>>> b080c34bcce0cd915712186d33ae367e3254e982
                finalScore += 20;
            }

            hideQuestions();
            currentQuestion++;
<<<<<<< HEAD
            submitBtn.style.display = 'none';
            if (currentQuestion > lastQuestion) {
                questionList.style.display = 'none';
                results.style.display = 'block';
=======
            submitBtn.style.display = "none"
            if (currentQuestion > lastQuestion) {
                questionList.style.display = "none";
                results.style.display = "block";
>>>>>>> b080c34bcce0cd915712186d33ae367e3254e982
            }

            return;
        }
    }
}

function displayButton() {
<<<<<<< HEAD
    submitBtn.style.display = 'block';
}

function redirectToHome() {
    window.location.href = '/';
}

function redirectToReview() {
    window.location.href = '/reviews';
}

function retryLesson() {
    window.location.reload();
}
=======
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
>>>>>>> b080c34bcce0cd915712186d33ae367e3254e982
