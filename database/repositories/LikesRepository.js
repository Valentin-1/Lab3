const Like = require('../models').Like

class RegionsRepository {
    async getAll(fields = undefined) {
        return await Like.findAll({attributes: fields})
    }

    async getOne(like_id) {
        return await Like.findByPk(like_id)
    }

    async create(like) {
        return await Region.create(like)
    }

    async update(like_id, like) {
        const existingLike = await Like.findByPk(like_id)
        if (existingLike) {
            return await existingLike.update(like);
        }
        return null;
    }

    async delete(like_id) {
        const deletedLike = await Like.destroy({
            where: { like_id: like_id }
        })
        if (deletedLike) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(like_id, fields = undefined) {
        return await Like.findAll({
            where: { like_id: like_id },
            attributes: fields
        })
    }
}

module.exports = new RegionsRepository()