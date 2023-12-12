const Comment = require('../models').Comment

class RegionsRepository {
    async getAll(fields = undefined) {
        return await Comment.findAll({attributes: fields})
    }

    async getOne(comment_id) {
        return await Comment.findByPk(comment_id)
    }

    async create(comment) {
        return await Comment.create(comment)
    }

    async update(comment_id, comment) {
        const existingComment = await Comment.findByPk(comment_id)
        if (existingComment) {
            return await existingComment.update(comment);
        }
        return null;
    }

    async delete(comment_id) {
        const deletedComment = await Comment.destroy({
            where: { comment_id: comment_id }
        })
        if (deletedComment) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(comment_id, fields = undefined) {
        return await Category.findAll({
            where: { comment_id: comment_id },
            attributes: fields
        })
    }
}

module.exports = new RegionsRepository()