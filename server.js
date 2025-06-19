const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const dbConnection = require("./configuration/dbConfig");
dotenv.config();
const PORT = process.env.PORT
const app = express()
const blogRoutes = require('./routes/blogRoute')
dbConnection()

app.use(cors())
app.use(express.json());
app.use('/blogs', blogRoutes );


app.listen(PORT, (()=>{
    console.log(`Server is runnig on ${PORT}` );
}))