const { response } = require("express");
const {v4: uuid} = require("uuid");
const cake = require("../models/cake");
const comment = require("../models/comment");

module.exports = {
    async index(request, response){
      try{
        const comments = await  comment.find();
        if(comments.length < 1){
            return response.status(404).json({message: "Not found comments!"})
        }

        return response.status(200).json({cakes}); 
      }
      catch (error){
         response.status(500).json({error: error.message})
      }
  },

  async store(request, response){
      const { title, description, idBolo } = request.body

      if( !title || !description ){
          return response.status(400).json({error: "Missing name or price"})
      }

      const arrayCake = await cake.find({ where: { idBolo } })
      const nameCake = Array(arrayCake)[0].map(any => any._id)

      console.log(nameCake)


      const comments = new comment({
          _id: uuid(),
          idBolo: nameCake,
          title,
          description,
      })

      try{
          await comments.save();

          return response.status(201).json({message: "Comment added succesfully!"});
      }catch(error){
          response.status(400).json({error: error.message});
      }
  },

  async update(request, response){
    const { title, description } = request.body

    if( title && !description ){
        return response.status(400).json({error: "You must add the new title  or description of the comment!"})
    }
    if (title) response.comments.title = title;
    if (description) response.comments.description = description;

    try{
      await response.comments.save();
      return response.status(200).json({message: "Cake update succesfully!"});
    }catch(err){
        response.status(500).json({error: err.message});
    }
  },

  async delete(request, response){
      try{
          await response.comments.remove();
          return response.status(200).json({message: "Cake successfully deleted!"});
      }catch(err){
          return response.status(500).json({error: err.message})
      }
  }
};