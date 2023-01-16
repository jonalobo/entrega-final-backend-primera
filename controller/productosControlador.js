const {request,response} = require('express')
const { Producto, productos, leer, buscarProductoId, actualizarPorId } = require('../helpers/claseProductos')


const obtenerTodos = async ( req = request , res = response)=>{
    //Acá debo traer los productos en la persistencia del FS
    let productoRespuesta = await leer()
    res.json(productoRespuesta)
}

const obtenerPorId =async (req,res)=>{
    const {id} = req.params
    let productoSeleccionado = await buscarProductoId(id)
    res.json(productoSeleccionado)
}

const agregarProductoControlador = (req = request,res = response)=>{
    //Envio el json a la clase producto asignandolo a una constante.
    const product = new Producto(req.body)
    //Ahora uso el método de la clase para agregarlo al arreglo
    product.agregarProducto()
    //Devuelvo los objetos guardados en el arreglo de la clase Producto
    res.json(productos)
}

const actualizarProductos = async (req = request, res = response)=>{
    const {id} = req.params
    const actualizado = req.body
    let actualizados = await actualizarPorId(id, actualizado)
    console.log(actualizado)
}


module.exports = {
    obtenerTodos,
    obtenerPorId,
    agregarProductoControlador,
    actualizarProductos
}