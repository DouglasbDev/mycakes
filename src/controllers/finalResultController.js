const { response } = require("express");
const {v4: uuid} = require("uuid");

const finalResult = require('../models/finalResult');



module.exports = {
    async index(request, response){
        try{
          const finalresults = await  finalResult.find();
          if(finalresults.length < 1){
              return response.status(404).json({message: "Not found final result!"})
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
  
        const finalresults = new finalResult({
            _id: uuid(),
            name,
            price,
        })
  
        try{
            await finalresults.save();
  
            return response.status(201).json({message: "Final result added succesfully!"});
        }catch(error){
            response.status(400).json({error: error.message});
        }
    },
  
    async update(request, response){
      const { name, price, } = request.body
  
      if( !name && !price ){
          return response.status(400).json({error: "You must add the new name or price of the final result!"})
      }
      if (name) response.finalresult.name = name;
      if (price) response.finalresult.price = price;
      
  
      try{
        await response.finalresult.save();
        return response.status(200).json({message: "Final result update succesfully!"});
      }catch(err){
          response.status(500).json({error: err.message});
      }
    },
  
    async delete(request, response){
        try{
            await response.finalresult.remove();
            return response.status(200).json({message: "Final result successfully deleted!"});
        }catch(err){
            return response.status(500).json({error: err.message})
        }
    }
  };