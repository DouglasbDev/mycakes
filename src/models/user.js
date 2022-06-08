const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id:{
       type: mongoose.Schema.Types.String,
       required: true, 
    },

    name:{
        type: mongoose.Schema.Types.String,
        required: true, 
     },

     email:{
        type: mongoose.Schema.Types.String,
        required: true, 
     },
     password:{
      type: mongoose.Schema.Types.Number,
      required: true, 
   },
   
    
});

module.exports = mongoose.model("user", userSchema);