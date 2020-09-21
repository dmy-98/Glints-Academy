'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ships extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Ships.init({
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        power: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Ships',
    });
    return Ships;
};