const {request,response} = require('express')
const {Carrito, leerCarrito, escribirEnCarrito} = require('../helpers/claseCarrito')


//Crea el carrito
const crearCarrito = async (req = request,res = response)=>{
    const newCarrito = new Carrito()
    //Al instanciar un carrito debo agregarlo a un array
    /* agregarNuevoCarrito(newCarrito) */
    newCarrito.nuevoCarrito(newCarrito)
    console.log(newCarrito)
    res.json({msg:`Carrito con el ID # ${newCarrito} creado`})
}

const listarProductosPorIdCarrito = async (req = request,res = response)=>{
    const {id} = req.params
    let demo2 = await leerCarrito()
    let demo1 = []
    demo2.map((e)=>{
        if (e.id == id) {
            demo1.push(e)
        } 
    })
    //Debo mostrar solo los productos del carrito seleccionado
    //Está condicionado para que muestre un msg si no existe el id
    if (demo1.length > 0) {
        res.json(demo1[0].productos)
    } else {
        res.status(400).json({msg:`El carrito con el Id # ${id} no existe`})
    }
}

const agregarProductoACarrito = async (req = request,res = response)=>{
    const {id} = req.params
    const nuevoCarrito =  new Carrito()
    await nuevoCarrito.agregarProductoACarrito(id)
    res.json(nuevoCarrito)
}
const borrarCarritoPorId = async (req = request,res = response)=>{
    const {id} = req.params
    let demo2 = await leerCarrito()
    let demo1 = []
    demo2.map((e)=>{
        if (e.id != id) {
            demo1.push(e)
        }
    })
    escribirEnCarrito('carrito.txt',JSON.stringify(demo1))
    res.json({msg:`El carrito con ID ${id} ha sido eliminado`})
}



module.exports = {
    crearCarrito,
    agregarProductoACarrito,
    borrarCarritoPorId,
    listarProductosPorIdCarrito
}