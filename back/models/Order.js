'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            // define association here
        }
    };
    Order.init({
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};