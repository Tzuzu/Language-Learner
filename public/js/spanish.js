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
        question: 'How do you say "Good Morning"?',
            choiceA: "Buenas Noches",
            choiceB: "Buenos Dias",
            choiceC: "Adios",
            choiceD: "Buenas Tardes",
        
            correct: "B"
    },
    {
        question: '"Lo siento" means?:',
            choiceA: "How do you say?",
            choiceB: "I have a question!",
            choiceC: "I am sorry",
            choiceD: "Please",

            correct: "C"
    },
    {
        question: 'Translate "Yo necesito un boligrafo"?',
            choiceA: "I need a book",
            choiceB: "I need a room",
            choiceC: "I need a pen",
            choiceD: "I need a pencil",

            correct: "C"
    },
    {
        question: 'What is the correct translation for "telephone"?',
            choiceA: "el teléfono",
            choiceB: "el agua",
            choiceC: "un paraguas",
            choiceD: "una bicicleta",

            correct: "A"
    },
    {
        question: 'What is the correct translation for "thank you very much"?',
            choiceA: "No sè",
            choiceB: "¡Perdon!",
            choiceC: "¡Salud!",
            choiceD: "Muchas gracias",

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