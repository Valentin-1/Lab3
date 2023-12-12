const CommentsSerice = require('../services/CommentsSerice')

class CommentsController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await CommentsSerice.getAll([
                'coment_id',
                'user_id',
                'product_id',
                'post_image'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const comment = await CommentsSerice.getOne(request.params.id)
            if(comment){
                return response.status(200).json(comment)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await CommentsSerice.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingComment = await CommentsSerice.getOne(request.params.id)
            if(existingComment){
                return response.status(200).json(await existingComment.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await CommentsSerice.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }
}

module.exports = new CommentsController()