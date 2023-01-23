const fs = require("fs");
const moment = require("moment");

const { leer } = require("../helpers/claseProductos");

const productosCarrito = [];
const carritos = []

class Carrito {
  constructor() {
    (this.id = carritos.length + 1),
    (this.fecha = moment().format());
  }
  async nuevoCarrito() {
    return productosCarrito;
  }

  /* async agregarProductoACarrito (id){
        let productosEnFs = await leer()
        productosEnFs.map((e)=>{
            if (e.id == id) {
                this.productos.push(e)
            }
        })
        let prodEnCarrito = JSON.stringify(this.productos)
        escribirEnCarrito('carrito.txt',prodEnCarrito)
    } */
}

async function agregarNuevoCarrito(carrito) {
    carritos.push(carrito)
    console.log(carritos)
    return carritos
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
  escribirEnCarrito,
  agregarNuevoCarrito
};
