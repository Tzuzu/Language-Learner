const { DataTypes } = require('sequelize'); 
const sequelize = require('..') // will need to import the config database here

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
    // add language related fields right here as needed for the 3 languages
});

module.exports = Language;