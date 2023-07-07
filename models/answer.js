const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const answer = sequelize.define('answer', {
  answer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  answer_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  // Add any other answer-related fields as needed
});

module.exports = answer;

// need to clean up comments
