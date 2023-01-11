const moment = require('moment')

const productos = []

class Producto {
    constructor({nombre,descripcion,codigo,fotoUrl,precio,stock}){
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.codigo = codigo,
        this.fotoUrl = fotoUrl,
        this.precio = precio,
        this.stock = stock
    }
    agregarProducto(){
        const id = productos.length + 1
        const fecha = moment().format()
        const productoAgregar = {
            id,
            fecha,
            nombre: this.nombre,
            descripcion: this.descripcion,
            codigo: this.codigo,
            fotoUrl: this.fotoUrl,
            precio: this.precio,
            stock: this.stock
        }
        productos.push(productoAgregar)
    }
}

module.exports = {
    productos,
    Producto
}