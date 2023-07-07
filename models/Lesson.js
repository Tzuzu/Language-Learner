const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//const db = require(''); //will need to be sure to add config database here or utils

const Lesson = sequelize.define('Lesson', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sequelize, 
  modelName: "lesson"
  // add lessons
});

module.exports = Lesson;