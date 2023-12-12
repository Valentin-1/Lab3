const ManufacturesRepository = require('../../database/repositories/ManufacturesRepository')

class ManufacuresService {
    async getAll(fields = undefined) {
        return await ManufacturesRepository.getAll(fields)
    }

    async getOne(id) {
        return await ManufacturesRepository.getOne(id)
    }

    async create(manufacturer) {
        return await ManufacturesRepository.create(manufacturer)
    }

    async update(id, manufacturer) {
        const existingManufacturer = await Manufacturer.findByPk(id)
        if (existingManufacturer) {
            return await existingManufacturer.update(manufacturer);
        }
        return null;
    }

    async delete(id) {
        return await ManufacturesRepository.delete(id)
    }
}

module.exports = new ManufacuresService()