const {request,response} = require('express')
const { Producto, productos } = require('../helpers/claseProductos')


const obtenerTodos = ( req = request , res = response)=>{
    //Acá debo traer los productos en la persistencia del FS
    console.log('Todos pueden verlo')
}

const obtenerPorId = (req,res)=>{
    res.send(req.params)
}

const agregarProductoControlador = (req = request,res = response)=>{
    //Envio el json a la clase producto asignandolo a una constante.
    const product = new Producto(req.body)
    //Ahora uso el método de la clase para agregarlo al arreglo
    product.agregarProducto()
    //Devuelvo los objetos guardados en el arreglo de la clase Producto
    res.json(productos)
}


module.exports = {
    obtenerTodos,
    obtenerPorId,
    agregarProductoControlador
}