const { Router } = require('express')
const { check } = require('express-validator')

const { agregarProductoControlador, actualizarProductosControlador, obtenerTodosControlador, obtenerPorIdControlador,borrarProductosControlador } = require('../controller/productosControlador')
const { validacion } = require('../helpers/middlewares')

//Enrutador para productos
const rutaProductos = Router()

//Listar todos los productos(público) 
rutaProductos.get('/productos',  obtenerTodosControlador)
//Lista el producto por su ID(público)
rutaProductos.get('/productos/:id', obtenerPorIdControlador)

//Ruta solo para administradores(administrador)
rutaProductos.post('/productos', [
    check('rol', 'No es un rol válido').isIn(['administrador']),
    validacion
] ,agregarProductoControlador)
//Ruta solo para administradores(administrador)
rutaProductos.put('/:id/productos', [
    check('rol', 'No es un rol válido').isIn(['administrador']),
    validacion
] ,actualizarProductosControlador)
//Ruta solo para administradores(administrador)
rutaProductos.delete('/:id/productos', [
    check('rol', 'No es un rol válido').isIn(['administrador']),
    validacion
] ,borrarProductosControlador)

module.exports = rutaProductos