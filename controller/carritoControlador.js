const {request,response} = require('express')
const {Carrito} = require('../helpers/claseCarrito')

const verCarrito = (req = request,res = response)=>{
    res.json({msg:'ruta get carrito'})
}

const crearCarrito =  (req = request,res = response)=>{
    const nuevoCarrito = new Carrito()
    res.json(nuevoCarrito)

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