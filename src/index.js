const { error } = require('console');
const express = require('express');
const mongoose = require('mongoose'); 
const userRoutes = require('./ROUTES/user');     


const app = express();

const port = process.env.PORT || 9000;


//middlewares
app.use('/api', userRoutes)
app.use(express.json());//transformar a json

//routes
app.get("/", (req, res) => {
    res.send("probando probando!");
});


//mongodb conexion
mongoose.connect('mongodb://localhost:27017/api_01')
.then(() => console.log('MongoDB conectado'))
.catch((error) => console.log(error));

app.listen(port, () => console.log('escuchando en puerto 9000', port));

