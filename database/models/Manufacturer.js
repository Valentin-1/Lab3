'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Manufacturer extends Model {
        static associate(models) {
            Manufacturer.hasOne(models.Product, {sourceKey: 'manufacturer_id', foreignKey: 'manufacturer_id'})
        }
    }
    Manufacturer.init(
        {
            manufacturer_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
              },
              manufacturer_name: {
                type: DataTypes.STRING(50),
              },
        },
        {
            sequelize,
            modelName: 'Manufacturer'
        });
    return Manufacturer;
};