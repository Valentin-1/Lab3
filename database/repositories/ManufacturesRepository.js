const Manufacturer = require('../models').Manufacturer

class ManufacturesRepository {
    async getAll(fields = undefined) {
        return await Manufacturer.findAll({attributes: fields})
    }

    async getOne(manufacturer_id) {
        return await Manufacturer.findByPk(manufacturer_id)
    }

    async create(manufacturer) {
        return await Manufacturer.create(manufacturer)
    }

    async update(manufacturer_id, manufacturer) {
        const existingManufacturer = await Manufacturer.findByPk(manufacturer_id)
        if (existingManufacturer) {
            return await existingManufacturer.update(manufacturer);
        }
        return null;
    }

    async delete(manufacturer_id) {
        const deletedManufacturer = await Manufacturer.destroy({
            where: { manufacturer_id: manufacturer_id }
        })
        if (deletedManufacturer) {
            return {};
        }
        return null;
    }

    async getAllOfCountry(manufacturer_id, fields = undefined) {
        return await Manufacturer.findAll({
            where: { manufacturer_id: manufacturer_id },
            attributes: fields
        })
    }
}

module.exports = new ManufacturesRepository()