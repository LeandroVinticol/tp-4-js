//3. Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }

  modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  mostrarPropiedades() {
    console.log(`Alto: ${this.alto}`);
    console.log(`Ancho: ${this.ancho}`);
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

let rectangulo1 = new Rectangulo(5, 10);

console.log("Propiedades del rectángulo:");
rectangulo1.mostrarPropiedades();

console.log("Perímetro del rectángulo:", rectangulo1.calcularPerimetro());
console.log("Área del rectángulo:", rectangulo1.calcularArea());

// Modificar el alto y ancho del rectángulo
rectangulo1.modificarAlto(8);
rectangulo1.modificarAncho(12);

console.log("Propiedades del rectángulo después de modificar:");
rectangulo1.mostrarPropiedades();

console.log(
  "Perímetro del rectángulo después de modificar:",
  rectangulo1.calcularPerimetro()
);
console.log(
  "Área del rectángulo después de modificar:",
  rectangulo1.calcularArea()
);
