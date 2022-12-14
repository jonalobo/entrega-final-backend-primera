const fs = require("fs");
const moment = require("moment");

const productos = [];

class Producto {
  constructor({ nombre, descripcion, codigo, fotoUrl, precio, stock }) {
    (this.nombre = nombre),
      (this.descripcion = descripcion),
      (this.codigo = codigo),
      (this.fotoUrl = fotoUrl),
      (this.precio = precio),
      (this.stock = stock);
  }
  agregarProducto() {
    const id = productos.length + 1;
    const fecha = moment().format();
    const productoAgregar = {
      id,
      fecha,
      nombre: this.nombre,
      descripcion: this.descripcion,
      codigo: this.codigo,
      fotoUrl: this.fotoUrl,
      precio: this.precio,
      stock: this.stock,
    };
    productos.push(productoAgregar);
    const productoTexto = JSON.stringify(productos);
    escribir("productos.txt", productoTexto);
  }
  lectura() {
    leer();
  }
}

async function leer() {
  try {
    await fs.promises
      .readFile("productos.txt", "utf-8")
      .then(async (contenido) => {
        const demo = JSON.parse(contenido)
        await prueba(demo)
      });
  } catch (error) {
    console.log(error);
  }
}

async function prueba(demo) {
    return await demo
}

async function escribir(nombre, producto) {
  try {
    await fs.promises.writeFile(nombre, producto);
    console.log("agregado");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  productos,
  Producto,
  leer,
  escribir,
  prueba
};
