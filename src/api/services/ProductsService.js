const ProductsRepositories = require('../../database/repositories/ProductsRepositories')

class ProductsService {
    async getAll(fields = undefined) {
        return await ProductsRepositories.getAll(fields)
    }

    async getOne(id) {
        return await ProductsRepositories.getOne(id)
    }

    async create(product) {
        return await ProductsRepositories.create(product)
    }

    async update(id, product) {
        const existingProduct = await Product.findByPk(id)
        if (existingProduct) {
            return await existingProduct.update(product);
        }
        return null;
    }

    async delete(id) {
        return await ProductsRepositories.delete(id)
    }
}

module.exports = new ProductsService()