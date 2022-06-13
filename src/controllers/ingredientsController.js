const { response } = require("express");
const {v4: uuid} = require("uuid");
const ingredient = require("../models/Ingredients");

module.exports = {
  async index(request, response){
      try{
        const ingredients = await  ingredient.find();
        if(ingredients.length < 1){
            return response.status(404).json({message: "Not found ingredients!"})
        }

        return response.status(200).json({ingredients}); 
      }
      catch (error){
         response.status(500).json({error: error.message})
      }
  },

  async store(request, response){
      const { name, price, } = request.body

      if( !name || !price ){
          return response.status(400).json({error: "Missing name or price"})
      }

      const ingredients = new ingredient({
          _id: uuid(),
          name,
          price,
      })

      try{
          await ingredients.save();

          return response.status(201).json({message: "Ingredient added succesfully!"});
      }catch(error){
          response.status(400).json({error: error.message});
      }
  },

  async update(request, response){
    const { name, price, } = request.body

    if( !name && !price ){
        return response.status(400).json({error: "You must add the new name or price of the ingredient!"})
    }
    if (name) response.ingredients.name = name;
    if (price) response.ingredients.price = price;
    

    try{
      await response.ingredients.save();
      return response.status(200).json({message: "Cake update succesfully!"});
    }catch(err){
        response.status(500).json({error: err.message});
    }
  },

  async delete(request, response){
      try{
          await response.ingredients.remove();
          return response.status(200).json({message: "Ingredient successfully deleted!"});
      }catch(err){
          return response.status(500).json({error: err.message})
      }
  }
};