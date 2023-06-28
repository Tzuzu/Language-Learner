const Lesson = require('../models/lesson');
const Question = require('../models/Question');
const Answer = require('../models/answer');

// Should retrieve the lesson ID to associate with the questions.
const lessonId = 1; // placeholder lesson id for now 

// Create a question here
const question = await Question.create({
  lesson_id: lessonId,
  question_text: 'What is the correct translation for "telephone"?',
});

// Create answers for the question
await Answer.bulkCreate([
  {
    question_id: question.question_id,
    answer_text: 'A. el teléfono',
    is_correct: true,
  },
  {
    question_id: question.question_id,
    answer_text: 'B. el agua',
    is_correct: false,
  },
  {
    question_id: question.question_id,
    answer_text: 'C. un paraguas',
    is_correct: false,
  },
  {
    question_id: question.question_id,
    answer_text: 'D. una bicicleta',
    is_correct: false,
  },  
]);
