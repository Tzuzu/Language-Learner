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
const lessonId = 3; // lesson ID for Japanese

// Create a question here
const question = [
    {
        question_text: 'やまださんは学生でわありません。What does "学生" mean?',
        answers: [
            { answer_text: 'A. Teacher', is_correct: false },
            { answer_text: 'B. Student', is_correct: true },
            { answer_text: 'C. Doctor', is_correct: false },
            { answer_text: 'D. Lawyer', is_correct: false },
        ],
    },
    {
        question_text: 'What is 100 in Japanese?',
        answers: [
            { answer_text: 'A. 百', is_correct: true },
            { answer_text: 'B. 千', is_correct: false },
            { answer_text: 'C. 十', is_correct: false },
            { answer_text: 'D. 一', is_correct: false },
        ],
    },
    {
        question_text: '初めまして。What does this mean?',
        answers: [
            { answer_text: 'A. Hello', is_correct: false },
            { answer_text: 'B. Good day', is_correct: false },
            { answer_text: 'C. It is nice to meet you', is_correct: true },
            { answer_text: 'D. Good night', is_correct: false },
        ],
    },
    {
        question_text:
            '私はきのう京都に行きました。Which city is "京都（きょうと）"?',
        answers: [
            { answer_text: 'A. Osaka', is_correct: false },
            { answer_text: 'B. Tokyo', is_correct: false },
            { answer_text: 'C. Sendai', is_correct: false },
            { answer_text: 'D. Kyoto', is_correct: true },
        ],
    },
    {
        question_text:
            'あれは日本の映画じゃないかったです。What does the Kanji "えいが"　mean?',
        answers: [
            { answer_text: 'A. Book', is_correct: false },
            { answer_text: 'B. Manga', is_correct: false },
            { answer_text: 'C. Game', is_correct: false },
            { answer_text: 'D. Movie', is_correct: true },
        ],
    },
];
const createQuestions = async () => {
    for (const question of question) {
        await createQuestionsWithAnswers(
            lessonId,
            question.question_text,
            question.answers
        );
    }
};
createQuestions();
