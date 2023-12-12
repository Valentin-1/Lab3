const User = require('../models').User

class CountriesRepository {
    async getAll(fields = undefined) {
        return await User.findAll({attributes: fields})
    }

    async getOne(user_id) {
        return await User.findByPk(user_id)
    }

    async create(user) {
        return await User.create(user)
    }

    async update(user_id, User) {
        const existingUser = await User.findByPk(user_id)
        if (existingUser) {
            return await existingUser.update(user);
        }
        return null;
    }

    async delete(user_id) {
        return await User.destroy({
            where: { user_id: user_id }
        })
    }

    async getAllOfCountry(user_id, fields = undefined) {
        return await User.findAll({
            where: { user_id: user_id },
            attributes: fields
        })
    }
}

module.exports = new CountriesRepository()