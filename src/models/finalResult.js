const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
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
        required: false, 
     },
   
    
});



module.exports = mongoose.model("result", resultSchema);