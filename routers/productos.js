const { Router } = require('express')
const { check } = require('express-validator')

const { obtenerTodos, obtenerPorId, agregarProductoControlador } = require('../controller/productosControlador')
const { validacion } = require('../helpers/middlewares')

//Enrutador para productos
const rutaProductos = Router()

//Listar todos los productos(público) 
rutaProductos.get('/productos',  obtenerTodos)
//Lista el producto por su ID(público)
rutaProductos.get('/productos/:id', obtenerPorId)

//Ruta solo para administradores(administrador)
rutaProductos.post('/productos', [
    check('rol', 'No es un rol válido').isIn(['administrador']),
    validacion
] ,agregarProductoControlador)
//Ruta solo para administradores(administrador)
rutaProductos.put('/:id/productos', [
    check('rol', 'No es un rol válido').isIn(['administrador']),
    validacion
] ,( req , res )=>{
    console.log(req.params)
    console.log('Ruta put')
})
//Ruta solo para administradores(administrador)
rutaProductos.delete('/productos', [
    check('rol', 'No es un rol válido').isIn(['administrador']),
    validacion
] ,( req , res )=>{
    console.log('Ruta delete')
})

module.exports = rutaProductos