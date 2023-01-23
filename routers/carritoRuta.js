const { Router } = require('express')
const { verCarrito,crearCarrito,agregarProductoACarrito } = require('../controller/carritoControlador')

const rutaCarrito = Router()

//Ruta de prueba
rutaCarrito.get('/carrito',verCarrito)


rutaCarrito.post('/carrito',crearCarrito)


rutaCarrito.post('/carrito/:id/productos',agregarProductoACarrito)

module.exports = rutaCarrito