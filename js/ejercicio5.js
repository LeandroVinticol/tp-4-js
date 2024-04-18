/*5. Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = this.generaDNI();
    this.sexo = sexo.toUpperCase();
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    let generacion = "";
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      generacion = "Silent Generation";
      console.log(
        "La persona pertenece a la generación Silent Generation. Rasgo característico: Austeridad."
      );
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      generacion = "Baby Boomer";
      console.log(
        "La persona pertenece a la generación Baby Boomer. Rasgo característico: Ambición."
      );
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      generacion = "Generación X";
      console.log(
        "La persona pertenece a la generación X. Rasgo característico: Obsesión por el éxito."
      );
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      console.log(
        "La persona pertenece a la generación Y (Millennials). Rasgo característico: Frustración"
      );
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      generacion = "Generación Z";
      console.log(
        "La persona pertenece a la generación Z. Rasgo característico: Irreverencia"
      );
    } else {
      generacion = "Generación no definida";
      console.log("No se puede determinar la generación de la persona.");
    }
    return generacion;
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return "La persona es mayor de edad.";
    } else {
      return "La persona es menor de edad.";
    }
  }

  mostrarDatos() {
    return (
      "Nombre: " +
      this.nombre +
      `\nEdad: ${this.edad}` +
      `\nDNI: ${this.DNI}` +
      `\nSexo: ${this.sexo}` +
      `\nPeso: ${this.peso}` +
      `\nAltura: ${this.altura}` +
      `\nAño de nacimiento: ${this.añoNacimiento}`
    );
  }

  generaDNI() {
    return Math.floor(Math.random() * 100000000);
  }
}

let persona1 = new Persona("Juan", 25, "H", 70, 1.75, 1995);

console.log("Datos de la persona:");
console.log(persona1.mostrarDatos());
console.log(persona1.esMayorDeEdad());
persona1.mostrarGeneracion();
