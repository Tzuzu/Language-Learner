const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const question = sequelize.define('question', {
    question_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    question_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Add question related fields here once we know what we will ask.
});

module.exports = question;
