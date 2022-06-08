const { response } = require("express");
const {v4: uuid} = require("uuid");
const users = require("../models/user");

module.exports = {
  async index(request, response){
      try{
        const user = await  users.find();
        if(user.length < 1){
            return response.status(404).json({message: "Not found user!"})
        }

        return response.status(200).json({user}); 
      }
      catch (error){
         response.status(500).json({error: error.message})
      }
  },

  async storeCreate(request, response){
      const { name, email, password} = request.body
      

      if( !name || !email || ! password ){
          return response.status(400).json({error: "Missing email or password or name"})
      }
      

    const emailUser = await users.find({where: { email }})
    if(emailUser.length !== 0){ return response.status(400). json({ mensagem: 'Já existe um usuário com o mesmo EMAIL cadastrado na base!' })}
   

      const user = new users({
          _id: uuid(),
          name,
          email,
          password,
      })

      try{
          await user.save();

          return response.status(201).json({message: "User added succesfully!"});
      }catch(error){
          response.status(400).json({error: error.message});
      }
  },


  async storeLogin(request, response){
    const { email, password} = request.body

    if( !email || ! password ){
        return response.status(400).json({error: "Missing email or password"})
    }


    const verifyUser = await users.find({ where: { email } })
    if(verifyUser.length === 0) return response.status(401).json({ mensagem: "Falha na Autenticação" })
    
    try{
       const user = await users.find({ email })
       if(user.length < 1){
          return response.status(404).json({message: "Not found User!"})
      } 
        

        return response.status(201).json({
            message: "Login succesfully!",   
            user: verifyUser});
    }catch(error){
        response.status(400).json({error: error.message});
    }
},


async update(request, response){
    const { name, email, password } = request.body

    if( !name && !email && !password ){
        return response.status(400).json({error: "You must add the new name or price or description of the cake!"})
    }
    if (name) response.user.name = name;
    if (email) response.user.email = email;
    if (password) responseuser.password = password;

    try{
      await response.user.save();
      return response.status(200).json({message: "Cake update succesfully!"});
    }catch(err){
        response.status(500).json({error: err.message});
    }
  },

  async delete(request, response){
      try{
          await response.user.remove();
          return response.status(200).json({message: "user successfully deleted!"});
      }catch(err){
          return response.status(500).json({error: err.message})
      }
  }
};