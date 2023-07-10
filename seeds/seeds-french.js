const Lesson = require('../models/lesson');
const Question = require('../models/question');
const Answer = require('../models/answer');

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
const lessonId = 2; // lesson ID for French

// Create a question here
const question = [
  {
    question_text: 'How do you say "Bonjour" in English?',
    answers: [
      { answer_text: 'A. Hi!', is_correct: false },
      { answer_text: 'B. Hello!', is_correct: true },
      { answer_text: 'C. Whats up!', is_correct: false },
      { answer_text: 'D. Hey!', is_correct: false },
    ],
  },
  {
    question_text: 'Translate: "je suis une femme."?',
    answers: [
      { answer_text: 'A. I am a woman.', is_correct: true },
      { answer_text: 'B. I am a boy.', is_correct: false },
      { answer_text: 'C. I am a girl.', is_correct: false },
      { answer_text: 'D. I am a man.', is_correct: false },
    ],
  },
  {
    question_text: 'What is the meaning of "merci":',
    answers: [
      { answer_text: 'A. Handsome', is_correct: false },
      { answer_text: 'B. Nice', is_correct: false },
      { answer_text: 'C. Thank you!', is_correct: true },
      { answer_text: 'D. Beautiful', is_correct: false },
    ],
  },
  {
    question_text: 'Translate "j`irai":',
    answers: [
      { answer_text: 'A. I will have', is_correct: false },
      { answer_text: 'B. I will return', is_correct: false },
      { answer_text: 'C. I will stay', is_correct: false },
      { answer_text: 'D. I will go', is_correct: true },
    ],
  },
  {
    question_text: 'Doorkeeper means what in French?',
    answers: [
      { answer_text: 'A. Faux pas', is_correct: false },
      { answer_text: 'B. Concierge', is_correct: true },
      { answer_text: 'C. Apropos', is_correct: false },
      { answer_text: 'D. Malaise', is_correct: false },
    ],
  },
];
const createQuestions = async () => {
    for (const question of question) {
      await createQuestionsWithAnswers(lessonId, question.question_text, question.answers);
    }
  };
  createQuestions();