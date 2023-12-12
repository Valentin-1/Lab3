const Category = require('../models').Category

class CategoriesRepository {
    async getAll(fields = undefined) {
        return await Category.findAll({attributes: fields})
    }

    async getOne(category_id) {
        return await Category.findByPk(category_id)
    }

    async create(category) {
        return await Category.create(category)
    }

    async update(category_id, category) {
        const existingCategory = await Category.findByPk(category_id)
        if (existingCategory) {
            return await existingCategory.update(category);
        }
        return null;
    }

    async delete(category_id) {
        const deletedCategory = await Category.destroy({
            where: { category_id: category_id }
        })
        if (deletedCategory) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(category_id, fields = undefined) {
        return await Category.findAll({
            where: { category_id: category_id },
            attributes: fields
        })
    }
}

module.exports = new CategoriesRepository()