const { json } = require("express/lib/response");
const { validate: isUuid } = require("uuid"); 
const cake = require("../models/cake");

module.exports = {
    async validateId (request, response, next){
        const { id } = request.params;

        if(!isUuid(id)){
            return response.status(400).json({error: "Invalid ID."});
        }

        try{
            const cakes = await cake.findById(id);
            response.cakes = cakes;
            if(!cakes){
                return response.status(404).json({error: "Not Found Cake!"})
            }
        }catch(err){
            return response.status(500).json({error: err.message});
        }

        next();

    },
}