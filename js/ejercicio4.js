/*4.Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log("Código:", this.codigo);
    console.log("Nombre:", this.nombre);
    console.log("Precio:", this.precio);
  }
}

let productos = [
  new Producto("001", "Manzana", 10),
  new Producto("002", "Naranja", 15),
  new Producto("003", "Banana", 20),
];

console.log("Datos de los productos:");
for (let i = 0; i < productos.length; i++) {
  console.log("Producto " + (i + 1) + ":");
  productos[i].imprimeDatos();
  console.log("-------------");
}
