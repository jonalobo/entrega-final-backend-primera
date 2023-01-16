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
}

async function leer() {
  //Este contenedor debe estar fuera del try catch para evitar bucles
  let contedorProducto = []
  try {
    await fs.promises.readFile("productos.txt", "utf-8").then((contenido) => {
      contedorProducto = JSON.parse(contenido);
    });
  } catch (error) {
    console.log(error);
  }
  return contedorProducto
}

async function buscarProductoId(identificador) {
  let demo = {msg:"No existe el ID"}
  let productosDesdeFs = await leer()
  productosDesdeFs.map((e)=>{
    const numero = e.id
    if (numero == identificador) {
      demo = e
    }
  })
  return  demo
}

async function actualizarPorId(identificador, actualizado) {
  const nuevosProductos = []
  let actualizarId = await leer()
  actualizarId.map((e)=>{
    if (e.id == identificador) {
       e = actualizado
       return actualizado
    }
    else {
      console.log('No existe')
    }
    nuevosProductos.push(e)
  })
  const demo1 = JSON.stringify(nuevosProductos) 
  return escribir('demo.txt', demo1)
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
  buscarProductoId,
  actualizarPorId
};
