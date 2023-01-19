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
    check('rol', 'Error: -1, ruta productos metodo post no autorizada').isIn(['administrador']),
    validacion
] ,agregarProductoControlador)
//Ruta solo para administradores(administrador)
rutaProductos.put('/:id/productos', [
    check('rol', 'Error: -1, ruta productos metodo put no autorizada').isIn(['administrador']),
    validacion
] ,actualizarProductosControlador)
//Ruta solo para administradores(administrador)
rutaProductos.delete('/:id/productos', [
    check('rol', 'Error: -1, ruta productos metodo delete no autorizada').isIn(['administrador']),
    validacion
] ,borrarProductosControlador)

module.exports = rutaProductos