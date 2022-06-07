const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
    _id:{
       type: mongoose.Schema.Types.String,
       required: true, 
    },

    name:{
        type: mongoose.Schema.Types.String,
        required: true, 
     },

     price:{
        type: mongoose.Schema.Types.Number,
        required: true, 
     },
   
    
});

module.exports = mongoose.model("ingredients", ingredientsSchema);