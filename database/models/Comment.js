'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.Product, {foreignKey: 'commentId'})
            Comment.belongsTo(models.User, {foreignKey: 'userId'})
            Comment.belongsTo(models.Like, {foreignKey: 'likeId'})
        }
    }
    Comment.init(
        {
            comment_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
        },
        {
            sequelize,
            modelName: 'Comment'
        });
    return Comment;
};