const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const {chathandler} = require("./controllers/chatController");

const connectDB = require("./config/dbConnection");

app.use(cors());
app.use(express.json());

connectDB();

app.get("/",(req,res)=>{
    res.send("Server running")
});

app.post("/chat", chathandler);
const port = process.env.PORT||5001
app.listen(port, ()=>{
    console.log(`Server running on port ${port}` );
});