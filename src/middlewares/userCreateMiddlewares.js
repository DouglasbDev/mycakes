const { json } = require("express/lib/response");
const { validate: isUuid } = require("uuid");
const users = require("../models/user");



module.exports = {
    async validateId (request, response, next){
        const { id } = request.params;

        if(!isUuid(id)){
            return response.status(400).json({error: "Invalid ID."});
        }

        try{
            const user = await users.findById(id);
            response.user = user;
            if(!user){
                return response.status(404).json({error: "Not Found User!"})
            }
            
        }catch(err){
            return response.status(500).json({error: err.message});
        }

        next();

    },
}