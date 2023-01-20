const fs = require("fs");
const moment = require("moment");

const productos = [];

class Producto {
  constructor(nombre, descripcion, codigo, fotoUrl, precio, stock) {
    this.id = productos.length + 1,
      this.fecha = moment().format(),
      this.nombre = nombre,
      this.descripcion = descripcion,
      this.codigo = codigo,
      this.fotoUrl = fotoUrl,
      this.precio = precio,
      this.stock = stock;
  }
  async agregarProducto() {
    const productoAgregar = {
      id: this.id,
      fecha: this.fecha,
      nombre: this.nombre,
      descripcion: this.descripcion,
      codigo: this.codigo,
      fotoUrl: this.fotoUrl,
      precio: this.precio,
      stock: this.stock,
    };
    //Debo leer la persistencia para que el actualizar y borrar tengan efecto
    let prueba = await leer()
    if (prueba.length > 0) {
      const prueba3 = prueba.slice(-1)
      productoAgregar.id = prueba3[0].id + 1
      prueba.push(productoAgregar)
      const productoTexto = JSON.stringify(prueba)
      escribir("productos.txt", productoTexto)
    } else {
      console.log('vacio')
      productos.push(productoAgregar)
      const productoTexto = JSON.stringify(productos);
      escribir("productos.txt", productoTexto)
    }
    /* if (prueba.length == 0) {
      productos.push(productoAgregar);
      const productoTexto = JSON.stringify(productos);
      escribir("productos.txt", productoTexto)
    } else {
      prueba.push(productoAgregar)
      const productoTexto = JSON.stringify(prueba);
      escribir("productos.txt", productoTexto)
    } */
    /* productos.push(prueba)
    await escribir('productos.txt',JSON.stringify(productos)) */
    /* productos.push(productoAgregar);
    const productoTexto = JSON.stringify(productos);
    escribir("productos.txt", productoTexto); */
  }
}

async function leer() {
  //Este contenedor debe estar fuera del try catch para evitar bucles
  let contenedorProducto = [];
  try {
    await fs.promises.readFile("productos.txt", "utf-8").then((contenido) => {
      contenedorProducto = JSON.parse(contenido);
    });
  } catch (error) {
    console.log(error);
  }
  return contenedorProducto;
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
};
