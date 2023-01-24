const { Router } = require('express')
const { crearCarrito,agregarProductoACarrito,borrarCarritoPorId, listarProductosPorIdCarrito } = require('../controller/carritoControlador')

const rutaCarrito = Router()


//Ruta para obtener productos según el carrito elegido
rutaCarrito.get('/carrito/:id/productos',listarProductosPorIdCarrito)


rutaCarrito.post('/carrito',crearCarrito)


rutaCarrito.post('/carrito/:id/productos',agregarProductoACarrito)


rutaCarrito.delete('/carrito/:id',borrarCarritoPorId)

module.exports = rutaCarrito