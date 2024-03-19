const express = require("express")
const morgan = require("morgan")
const colors = require("colors")
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenvconfig
dotenv.config();

//MongoDb connection
connectDB();

//rest object
const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/users/', require('./routes/userRoutes'))
app.use('/api/v1/admin/', require('./routes/adminRoutes'))
app.use('/api/v1/doctor/', require('./routes/doctorRoutes'))

//PORT
const port = process.env.PORT || 8080
//listen port
app.listen(port,()=>{
    console.log(`server running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
})









