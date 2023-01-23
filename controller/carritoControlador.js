const {request,response} = require('express')
const {Carrito, agregarNuevoCarrito} = require('../helpers/claseCarrito')


const verCarrito = (req = request,res = response)=>{
    res.json({msg:'ruta get carrito'})
}

const crearCarrito = async (req = request,res = response)=>{
    const newCarrito = new Carrito()
    agregarNuevoCarrito(newCarrito)
    res.json({msg:"Carrito creado correctamente"})
}


const agregarProductoACarrito = async (req = request,res = response)=>{
    const {id} = req.params
    const nuevoCarrito =  new Carrito()
    await nuevoCarrito.agregarProductoACarrito(id)
    res.json(nuevoCarrito)
}

module.exports = {
    verCarrito,
    crearCarrito,
    agregarProductoACarrito
}