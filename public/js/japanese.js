var homeBtn = document.getElementById("home");
var reviewBtn = document.getElementById("review");
var retryBtn = document.getElementById("retry");
var startBtn = document.getElementById("start");
var question = document.getElementById("question");
var results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var currentQuestion = 0;
var quizCompleted = false;
var lastQuestion = questions.length -1;

var questions = [ 
    {
        question: `やまださんは学生でわありません。What does "学生" mean?`,
            choiceA: "Teacher",
            choiceB: "Student",
            choiceC: "Doctor",
            choiceD: "Lawyer",
        
            correct: "B"
    },
    {
        question: "What is 100 in Japanese?",
            choiceA: "百",
            choiceB: "千",
            choiceC: "十",
            choiceD: "一",

            correct: "A"
    },
    {
        question: "初めまして。What does this mean?",
            choiceA: "Hello",
            choiceB: "Good day",
            choiceC: "It is nice to meet you",
            choiceD: "Good night",

            correct: "C"
    },
    {
        question: `私はきのう京都に行きました。Which city is "京都（きょうと）"?`,
            choiceA: "Osaka",
            choiceB: "Tokyo",
            choiceC: "Sendai",
            choiceD: "Kyoto",

            correct: "D"
    },
    {
        question: `あれは日本の映画じゃないかったです。What does the Kanji "えいが"　mean?`,
            choiceA: "Book",
            choiceB: "Manga",
            choiceC: "Game",
            choiceD: "Movie",

            correct: "D"
    }
];

startBtn.addEventListener("click", function() {
    startQuiz();
    showQuestions();
});

function startQuiz() {
    startBtn.style.display = "none";
    quiz.style.display = "block";
}

function showQuestions() {
    question.innerHTML = questions[currentQuestion].question
    choiceA.innerHTML = questions[currentQuestion].choiceA
    choiceB.innerHTML = questions[currentQuestion].choiceB
    choiceC.innerHTML = questions[currentQuestion].choiceC
    choiceD.innerHTML = questions[currentQuestion].choiceD
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        finalScore += 20;
    }
    currentQuestion++
    if (currentQuestion > lastQuestion) {
        quiz.style.display = "none";
        results.style.display = "block";
        quizCompleted = true;
    } else {
        showQuestions();
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