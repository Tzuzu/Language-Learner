const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [8],
                },
            },
            languageId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'language',
                    key: 'id',
                },
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'user',
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(
                    newUserData.password,
                    10
                );
                return newUserData;
            },
        },
        // add user related fields here as needed
    }
);

module.exports = User;
