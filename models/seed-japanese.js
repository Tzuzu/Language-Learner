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
const lessonId = 3; // lesson ID for Spanish

// Create a question here
const question = [
  {
    question_text: '?',
    answers: [
      { answer_text: 'A. ', is_correct: false },
      { answer_text: 'B. ', is_correct: true },
      { answer_text: 'C. ', is_correct: false },
      { answer_text: 'D. B', is_correct: false },
    ],
  },
  {
    question_text: '?',
    answers: [
      { answer_text: 'A. ', is_correct: true },
      { answer_text: 'B. ', is_correct: false },
      { answer_text: 'C. ', is_correct: false },
      { answer_text: 'D. ', is_correct: false },
    ],
  },
  {
    question_text: '?',
    answers: [
      { answer_text: 'A. ', is_correct: false },
      { answer_text: 'B. ', is_correct: false },
      { answer_text: 'C. ', is_correct: true },
      { answer_text: 'D. ', is_correct: false },
    ],
  },
  {
    question_text: '?',
    answers: [
      { answer_text: 'A. ', is_correct: false },
      { answer_text: 'B. ', is_correct: false },
      { answer_text: 'C. ', is_correct: true },
      { answer_text: 'D. ', is_correct: false },
    ],
  },
  {
    question_text: '?',
    answers: [
      { answer_text: 'A. ', is_correct: false },
      { answer_text: 'B. ', is_correct: false },
      { answer_text: 'C. ', is_correct: false },
      { answer_text: 'D. ', is_correct: true },
    ],
  },
];
const createQuestions = async () => {
  for (const question of question) {
    await createQuestionsWithAnswers(lessonId, question.question_text, question.answers);
  }
};
createQuestions();