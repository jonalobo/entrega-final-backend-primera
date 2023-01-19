const { Router } = require('express')
const { check } = require('express-validator')

const rutaCarrito = Router()

rutaCarrito.get('/carrito',(req,res)=>{
    res.json({msg:'ruta get'})
})

module.exports = rutaCarrito