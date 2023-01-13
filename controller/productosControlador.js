const {request,response} = require('express')
const { Producto, productos, leer } = require('../helpers/claseProductos')


const obtenerTodos = async ( req = request , res = response)=>{
    //Acá debo traer los productos en la persistencia del FS
    let productoRespuesta = await leer()
    res.json(productoRespuesta)
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