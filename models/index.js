// Import Sequelize and database configuration
const sequelize = require('../config/connection');

// Import all of the models needed from the models folder
const Language = require('./language');
const Lesson = require('./lesson');
const Question = require('./question'); //will import the question.js when I can get it to connect
const User = require('./user');

// Define associations between models
Language.hasMany(User, { foreignKey: 'languageId' });
Language.hasOne(Lesson);
Lesson.belongsTo(Language);
Lesson.hasMany(Question);
Question.belongsTo(Lesson);

// Initialize models here
const models = {
  Language: Language.init(sequelize),
  Lesson: Lesson.init(sequelize),
  Question: Question.init(sequelize),
  User: User.init(sequelize),
};

// Run any model associations defined in the models 
Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

// Export models
module.exports = models;
