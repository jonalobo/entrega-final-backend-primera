require('dotenv').config()

const express = require('express')
const cors = require('cors')
const rutaProductos = require('./routers/productos')

//Inicializa el app
const app = express()

//Middleware
app.use(cors())
//Sin express.json no puede recibir json el backend
app.use(express.json())


//Rutas se encuentran en la carpeta Router
//Los controladores en la carpeta controller
app.use('/api', rutaProductos)

const PORT = process.env.PORT || 8080

app.listen(PORT,(e)=>{
    console.log(`Servidor escuchando en el puerto ${PORT} `)
})