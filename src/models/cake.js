const mongoose = require("mongoose");
const { double } = require("webidl-conversions");

const cakeSchema = new mongoose.Schema({
    _id:{
       type: String,
       required: true, 
    },

    name:{
        type: String,
        required: true, 
     },

     price:{
        type: double,
        required: true, 
     },

     description:{
        type: String,
        required: true, 
     }
    
    
});

module.exports = mongoose.model("cake", cakeSchema);