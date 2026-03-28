const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    user:{
        type:String
    },
    message:[{
        role:String,
        content:String
    }]
});

module.exports = mongoose.model("Chat",chatSchema);