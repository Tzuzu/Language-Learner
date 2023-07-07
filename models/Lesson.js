const { DataTypes } = require('sequelize');
const db = require('../config/connection'); 

const lesson = sequelize.define('lesson', {
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
  // add lessons
});

module.exports = lesson;
