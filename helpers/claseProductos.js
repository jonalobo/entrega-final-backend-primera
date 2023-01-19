const fs = require("fs");
const moment = require("moment");

const productos = [];

class Producto {
  constructor( nombre, descripcion, codigo, fotoUrl, precio, stock) {
      this.id = productos.length + 1,
      this.fecha = moment().format(),
      this.nombre = nombre,
      this.descripcion = descripcion,
      this.codigo = codigo,
      this.fotoUrl = fotoUrl,
      this.precio = precio,
      this.stock = stock;
  }
  agregarProducto() {
    const productoAgregar = {
      id:this.id,
      fecha:this.fecha,
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
}

async function leer() {
  //Este contenedor debe estar fuera del try catch para evitar bucles
  let contedorProducto = [];
  try {
    await fs.promises.readFile("productos.txt", "utf-8").then((contenido) => {
      contedorProducto = JSON.parse(contenido);
    });
  } catch (error) {
    console.log(error);
  }
  return contedorProducto;
}

async function buscarProductoId(identificador) {
  let demo = { msg: "No existe el ID" };
  let productosDesdeFs = await leer();
  productosDesdeFs.map((e) => {
    const numero = e.id;
    if (numero == identificador) {
      demo = e;
    }
  });
  return demo;
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
  buscarProductoId
  /* actualizarPorId, */
};
