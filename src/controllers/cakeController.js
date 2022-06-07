const { response } = require("express");
const {v4: uuid} = require("uuid");


const cake = require("../models/cake");

module.exports = {
  async index(resquest, response){
      try{
        const cakes = await  cake.find();
        if(cakes.length < 1){
            return response.status(404).json({message: "Not found cakes!"})
        }

        return response.status(200).json({cakes}); 
      }
      catch (error){
         response.status(500).json({error: error.message})
      }
  },

  async store(request, response){
      const { name, price, description } = request.body

      if( !name || !price || !description ){
          return response.status(400).json({error: "Missing name or price"})
      }

      const cakes = new cake({
          _id: uuid(),
          name,
          price,
          description,
      })

      try{
          await cakes.save();

          return response.status(201).json({message: "Cake added succesfully!"});
      }catch(error){
          response.status(400).json({error: error.message});
      }
  },

  async update(request, response){
    const { name, price, description } = request.body

    if( !name && !price && !description ){
        return response.status(400).json({error: "You must add the new name or price or description of the cake!"})
    }
    if (name) response.cakes.name = name;
    if (price) response.cakes.price = price;
    if (description) response.cakes.description = description;

    try{
      await response.cakes.save();
      return response.status(200).json({message: "Cake update succesfully!"});
    }catch(err){
        response.status(500).json({error: err.message});
    }
  },

  async delete(request, response){
      try{
          await response.cakes.remove();
          return response.status(200).json({message: "Cake successfully deleted!"});
      }catch(err){
          return response.status(500).json({error: err.message})
      }
  }
};