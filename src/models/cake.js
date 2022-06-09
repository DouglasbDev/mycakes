const mongoose = require("mongoose");
const { double } = require("webidl-conversions");

const cakeSchema = new mongoose.Schema({
    _id:{
       type: mongoose.Schema.Types.String,
       required: true, 
    },

    idBolo:{
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

     description:{
        type: mongoose.Schema.Types.String,
        required: true, 
     }
    
    
});

module.exports = mongoose.model("cake", cakeSchema);