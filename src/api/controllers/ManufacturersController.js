const ManufacuresService = require('../services/ManufacuresService')

class ManufacturersController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await ManufacuresService.getAll([
                'manufacturer_id',
                'manufacturer_name',
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const manufacturer = await ManufacuresService.getOne(request.params.id)
            if(manufacturer){
                return response.status(200).json(manufacturer)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await ManufacuresService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingManufacturer = await ManufacuresService.getOne(request.params.id)
            if(existingManufacturer){
                return response.status(200).json(await existingManufacturer.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await ManufacuresService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new ManufacturersController()