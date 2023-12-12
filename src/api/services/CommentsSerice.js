const CommentsRepository = require('../../database/repositories/CommentsRepository')

class CommentsSerice {
    async getAll(fields = undefined) {
        return await CommentsRepository.getAll(fields)
    }

    async getOne(id) {
        return await CommentsRepository.getOne(id)
    }

    async create(comment) {
        return await CommentsRepository.create(comment)
    }

    async update(id, comment) {
        const existingComment = await Comment.findByPk(id)
        if (existingComment) {
            return await existingComment.update(comment);
        }
        return null;
    }

    async delete(id) {
        return await CommentsRepository.delete(id)
    }
}

module.exports = new CommentsSerice()