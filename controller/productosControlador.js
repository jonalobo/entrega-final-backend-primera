const {request,response} = require('express')
const moment = require("moment");

const { Producto, productos, leer, buscarProductoId, escribir, /* actualizarPorId */ } = require('../helpers/claseProductos')


const obtenerTodosControlador = async ( req = request , res = response)=>{
    //Acá debo traer los productos en la persistencia del FS
    let productoRespuesta = await leer()
    res.json(productoRespuesta)
}

const obtenerPorIdControlador =async (req,res)=>{
    const {id} = req.params
    let productoSeleccionado = await buscarProductoId(id)
    res.json(productoSeleccionado)
}

const agregarProductoControlador = (req = request,res = response)=>{
    const {nombre,descripcion,codigo,fotoUrl,precio,stock} = req.body
    //Envio el json a la clase producto asignandolo a una constante.
    let product = new Producto(nombre,descripcion,codigo,fotoUrl,precio,stock)
    //Ahora uso el método de la clase para agregarlo al arreglo
    product.agregarProducto()
    //Devuelvo los objetos guardados en el arreglo de la clase Producto
    res.json(productos)
}

const actualizarProductosControlador = async (req = request, res = response)=>{
    const {id} = req.params
    const {nombre, descripcion, codigo, fotoUrl, precio, stock} = req.body
    const prueba = await leer()
    const demo1 = []
    prueba.map((e)=>{
        if (e.id == id) {
            e.nombre = nombre
            e.descripcion = descripcion
            e.codigo = codigo
            e.fotoUrl = fotoUrl
            e.precio = precio
            e.stock = stock
        }
        demo1.push(e)
    })

    escribir('productos.txt',JSON.stringify(demo1))
}


module.exports = {
    obtenerTodosControlador,
    obtenerPorIdControlador,
    agregarProductoControlador,
    actualizarProductosControlador
}