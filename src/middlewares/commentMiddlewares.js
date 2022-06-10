const { json } = require("express/lib/response");
const { validate: isUuid } = require("uuid"); 
const comment = require("../models/comment");

module.exports = {
    async validateId (request, response, next){
        const { id } = request.params;

        if(!isUuid(id)){
            return response.status(400).json({error: "Invalid ID."});
        }

        try{
            const comments = await comment.findById(id);
            response.comments = comments;
            if(!comments){
                return response.status(404).json({error: "Not Found comment!"})
            }
        }catch(err){
            return response.status(500).json({error: err.message});
        }

        next();

    },
}