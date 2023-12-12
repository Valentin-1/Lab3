const Product = require('../models').Product

class ProductsRepositories {
    async getAll(fields = undefined) {
        return await Product.findAll({attributes: fields})
    }

    async getOne(product_id) {
        return await Product.findByPk(product_id)
    }

    async create(product) {
        return await Product.create(product)
    }

    async update(product_id, product) {
        const existingProduct = await Product.findByPk(product_id)
        if (existingProduct) {
            return await existingProduct.update(product);
        }
        return null;
    }

    async delete(product_id) {
        return await Product.destroy({
            where: { product_id: product_id }
        })
    }

    async getAllOfCountry(product_id, fields = undefined) {
        return await Category.findAll({
            where: { product_id: product_id },
            attributes: fields
        })
    }
}

module.exports = new ProductsRepositories()