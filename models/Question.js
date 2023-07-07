const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Question = sequelize.define('Question', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize, 
  modelName: "question"
  // Add question related fields here once we know what we will ask.
});

module.exports = Question;
