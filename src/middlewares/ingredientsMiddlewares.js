const { json } = require("express/lib/response");
const { validate: isUuid } = require("uuid");
const ingredient = require("../models/Ingredients");


module.exports = {
    async validateId (request, response, next){
        const { id } = request.params;

        if(!isUuid(id)){
            return response.status(400).json({error: "Invalid ID."});
        }

        try{
            const ingredients = await ingredient.findById(id);
            response.ingredients = ingredients;
            if(!ingredients){
                return response.status(404).json({error: "Not Found Ingrendiet!"})
            }
        }catch(err){
            return response.status(500).json({error: err.message});
        }

        next();

    },
}