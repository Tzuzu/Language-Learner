var homeBtn = document.getElementById('home');
var reviewBtn = document.getElementById('review');
var retryBtn = document.getElementById('retry');
var startBtn = document.getElementById('start');
var question = document.getElementById('question');
var results = document.getElementById('results');
var finalScore = document.getElementById('finalScore');
var score = 0;
var quiz = document.getElementById('quiz');
var question = document.getElementById('question');
var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');
var choiceD = document.getElementById('D');
var currentQuestion = 0;
var quizCompleted = false;
var lastQuestion = 4;

var questions = [
    {
        question: 'How do you say "Bonjour" in English?',
        choiceA: 'Hi!',
        choiceB: 'Hello!',
        choiceC: 'Whats up!',
        choiceD: 'Hey!',

        correct: 'B',
    },
    {
        question: 'Translate: "je suis une femme."?',
        choiceA: 'I am a woman.',
        choiceB: 'I am a boy.',
        choiceC: 'I am a girl.',
        choiceD: 'I am a man.',

        correct: 'A',
    },
    {
        question: 'What is the meaning of "merci":',
        choiceA: 'Handsome',
        choiceB: 'Nice',
        choiceC: 'Thank you!',
        choiceD: 'Beautiful',

        correct: 'C',
    },
    {
        question: 'Translate "j`irai":',
        choiceA: 'I will have',
        choiceB: 'I will return',
        choiceC: 'I will stay',
        choiceD: 'I will go',

        correct: 'D',
    },
    {
        question: 'Doorkeeper means what in French?',
        choiceA: 'Faux pas',
        choiceB: 'Concierge',
        choiceC: 'Apropos',
        choiceD: 'Malaise',

        correct: 'B',
    },
];

startBtn.addEventListener('click', function () {
    startQuiz();
    showQuestions();
});

function startQuiz() {
    startBtn.style.display = 'none';
    quiz.style.display = 'block';
}

function showQuestions() {
    question.innerHTML = questions[currentQuestion].question;
    choiceA.innerHTML = questions[currentQuestion].choiceA;
    choiceB.innerHTML = questions[currentQuestion].choiceB;
    choiceC.innerHTML = questions[currentQuestion].choiceC;
    choiceD.innerHTML = questions[currentQuestion].choiceD;
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score += 20;
    }
    currentQuestion++;
    if (currentQuestion > lastQuestion) {
        quiz.style.display = 'none';
        results.style.display = 'block';
        quizCompleted = true;
        finalScore.innerHTML = score;
    } else {
        showQuestions();
    }
}

homeBtn.addEventListener("click", redirectToHome);
retryBtn.addEventListener("click", retryLesson);

function displayButton() {
    submitBtn.style.display = 'block';
}

function redirectToHome() {
    window.location.href = '/';
}
function retryLesson() {
    window.location.reload();
}