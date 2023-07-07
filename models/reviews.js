const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const review = sequelize.define('review', {
    review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    review_text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // add any other review information here if needed.
});

module.exports = review;
