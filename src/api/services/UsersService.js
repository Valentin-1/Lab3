const UsersRepository = require('../../database/repositories/UsersRepository')

class UsersService {
    async getAll(fields = undefined) {
        return await UsersRepository.getAll(fields)
    }

    async getOne(id) {
        return await UsersRepository.getOne(id)
    }

    async create(user) {
        return await UsersRepository.create(user)
    }

    async update(id, User) {
        const existingUser = await User.findByPk(id)
        if (existingUser) {
            return await existingUser.update(user);
        }
        return null;
    }

    async delete(id) {
        return await UsersRepository.delete(id)
    }
}

module.exports = new UsersService()