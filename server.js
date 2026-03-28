const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require("./config/dbConnection");

app.use(cors());
app.use(express.json());

connectDB();

app.get("/",(req,res)=>{
    res.send("Server running")
});
const port = 5001 || process.env.PORT
app.listen(port, ()=>{
    console.log(`Server running on port ${port}` );
});