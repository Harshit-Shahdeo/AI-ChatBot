const mongoose = require("mongoose")

const coonnectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://harshitshahdeo99_db_user:chat007@cluster007.yjkcblv.mongodb.net/");
        console.log("MongoDb Connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = coonnectDB;