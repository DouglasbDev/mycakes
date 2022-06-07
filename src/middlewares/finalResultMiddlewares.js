const { json } = require("express/lib/response");
const { validate: isUuid } = require("uuid");

const finalResult = require('../models/finalResult');

module.exports = {
    async validateId (request, response, next){
        const { id } = request.params;

        if(!isUuid(id)){
            return response.status(400).json({error: "Invalid ID."});
        }

        try{
            const finalresult = await finalResult.findById(id);
            response.finalresult = finalresult;
            if(!finalresult){
                return response.status(404).json({error: "Not Found final result!"})
            }
        }catch(err){
            return response.status(500).json({error: err.message});
        }

        next();

    },
}