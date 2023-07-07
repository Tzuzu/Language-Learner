const { DataTypes } = require('sequelize'); 
const sequelize = require('../config/connection') // will need to import the config database here

const Language = sequelize.define('Language', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    sequelize, 
    modelName: "language"
    // add language related fields right here as needed for the 3 languages
});

module.exports = Language;