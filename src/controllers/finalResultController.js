const { response } = require("express");
const {v4: uuid} = require("uuid");
const cake = require("../models/cake");

const finalResults = require('../models/finalResult');



module.exports = {
    async index(request, response){
        try{
          const finalresult = await  finalResults.find();
          if(finalresult.length < 1){
              return response.status(404).json({message: "Not found final result!"})
          }
  
          return response.status(200).json({finalresult}); 
        }
        catch (error){
           response.status(500).json({error: error.message})
        }
    },
  
    async store(request, response){
        const { name, idBolo, value1, value2, value3 } = request.body
        // if( !idBolo || !value1 || !value2 || !value3 ){
        //     return response.status(400).json({error: "Missing name or price"})
        // }

        const arrayCake = await cake.find({ where: { idBolo } })
        const priceCake = Array(arrayCake)[0].map(any => any.price)
        const sumResult = Number(priceCake) + Number(value1) + Number(value2) + Number(value3)
        
  
        const result = new finalResults({
            _id: uuid(),
            name,
            price: sumResult,
            
        })
  
        try{
            
            await result.save();
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