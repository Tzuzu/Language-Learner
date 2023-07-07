// Import Sequelize and database configuration
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// Import all of the models needed from the models folder
const language = require('./language');
const lesson = require('./lesson');
const question = require('./Question');
const User = require('./User');

// Define associations between models
language.hasMany(User, { foreignKey: 'languageId' });
language.hasOne(lesson);
lesson.belongsTo(language);
lesson.hasMany(question);
question.belongsTo(lesson);

// Initialize models here
const models = {
    language: language.init(sequelize),
    lesson: lesson.init(sequelize),
    question: question.init(sequelize),
    User: User.init(sequelize),
};

// Run any model associations defined in the models
Object.values(models)
    .filter((model) => typeof model.associate === 'function')
    .forEach((model) => model.associate(models));

// Export models
module.exports = models;
