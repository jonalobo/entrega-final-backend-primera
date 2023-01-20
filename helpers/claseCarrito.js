const fs = require("fs");
const moment = require("moment");

const { leer } = require('../helpers/claseProductos')

const productosCarrito = [];

class Carrito {
    constructor() {
        this.id = productosCarrito.length + 1,
        this.fecha = moment().format()
        this.productos = []
    }
    async agregarProductoACarrito (id){
        let productosEnFs = await leer()
        productosEnFs.map((e)=>{
            if (e.id == id) {
                this.productos.push(e)
            }
        })
        let prodEnCarrito = JSON.stringify(this.productos)
        escribirEnCarrito('carrito.txt',prodEnCarrito)
    }
}

async function escribirEnCarrito(nombre, producto) {
    try {
      await fs.promises.writeFile(nombre, producto);
    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
    Carrito,
    escribirEnCarrito
}