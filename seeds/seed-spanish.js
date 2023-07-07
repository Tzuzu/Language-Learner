const Lesson = require('./lesson');
const Question = require('./Question');
const Answer = require('./answer');

const createQuestionsWithAnswers = async (lessonId, questionText, answers) => {
  try {
    const question = await Question.create({
      lesson_id: lessonId,
      question_text: questionText,
    });

    const answerPromises = answers.map(async (answer) => {
      return Answer.create({
        question_id: question.question_id,
        answer_text: answer.answer_text,
        is_correct: answer.is_correct,
      });
    });
    await Promise.all(answerPromises);
    console.log('Question and answers created successfully');
  } catch (error) {
    console.error('Error creating question and answers:', error);
  }
};
// retrieves the lesson ID to associate with the questions.
const lessonId = 1; // lesson ID for Spanish

// Create a question here
const question = [
  {
    question_text: 'How do you say "Good Morning"?',
    answers: [
      { answer_text: 'A. Buenas Noches', is_correct: false },
      { answer_text: 'B. Buenos Dias', is_correct: true },
      { answer_text: 'C. Adios', is_correct: false },
      { answer_text: 'D. Buenas Tardes', is_correct: false },
    ],
  },
  {
    question_text: 'What is the correct translation for "telephone"?',
    answers: [
      { answer_text: 'A. el teléfono', is_correct: true },
      { answer_text: 'B. el agua', is_correct: false },
      { answer_text: 'C. un paraguas', is_correct: false },
      { answer_text: 'D. una bicicleta', is_correct: false },
    ],
  },
  {
    question_text: '"Lo siento" means?:',
    answers: [
      { answer_text: 'A. How do you say?', is_correct: false },
      { answer_text: 'B. I have a question!', is_correct: false },
      { answer_text: 'C. I am sorry', is_correct: true },
      { answer_text: 'D. Please', is_correct: false },
    ],
  },
  {
    question_text: 'Translate "Yo necesito un boligrafo"?',
    answers: [
      { answer_text: 'A. I need a book', is_correct: false },
      { answer_text: 'B. I need a room', is_correct: false },
      { answer_text: 'C. I need a pen', is_correct: true },
      { answer_text: 'D. I need a pencil', is_correct: false },
    ],
  },
  {
    question_text: 'What is the correct translation for "thank you very much"?',
    answers: [
      { answer_text: 'A. No sè', is_correct: false },
      { answer_text: 'B. ¡Perdon!', is_correct: false },
      { answer_text: 'C. ¡Salud!', is_correct: false },
      { answer_text: 'D. Muchas gracias', is_correct: true },
    ],
  },
];
const createQuestions = async () => {
  for (const question of question) {
    await createQuestionsWithAnswers(lessonId, question.question_text, question.answers);
  }
};
createQuestions();
