const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    _id:{
       type: mongoose.Schema.Types.String,
       required: true, 
    },

    idBolo:{
      type: mongoose.Schema.Types.String,
      required: true, 
   },

    title:{
    type: mongoose.Schema.Types.String,
    required: true, 
 },

     description:{
        type: mongoose.Schema.Types.String,
        required: true, 
     }
    
    
});

module.exports = mongoose.model("comment", commentSchema);