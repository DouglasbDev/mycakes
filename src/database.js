// const mongoose = require("mongoose");


// function connectToDatabase(){
// mongoose.connect(process.env.DATABASE_URL,
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to the database!"));

// }

// module.exports = connectToDatabase;


const mongoose = require("mongoose");

const connectDB =  async ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}

export default connectDB