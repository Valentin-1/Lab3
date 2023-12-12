'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.hasMany(models.Product, { sourceKey: 'category_id', foreignKey: 'category_id' })
        }
    }
    Category.init(
        {
            category_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
              },
              category_name: {
                type: DataTypes.STRING(50),
              },
        },
        {
            sequelize,
            modelName: 'Category'
        });
    return Category;
};