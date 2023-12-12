const CategoriesRepository = require('../../database/repositories/CategoriesRepository')

class CategoriesService {
    async getAll(fields = undefined) {
        return await CategoriesRepository.getAll(fields)
    }

    async getOne(id) {
        return await CategoriesRepository.getOne(id)
    }

    async create(category) {
        return await CategoriesRepository.create(category)
    }

    async update(id, category) {
        const existingCategory = await Category.findByPk(id)
        if (existingCategory) {
            return await existingCategory.update(category);
        }
        return null;
    }

    async delete(id) {
        return await CategoriesRepository.delete(id)
    }
}

module.exports = new CategoriesService()