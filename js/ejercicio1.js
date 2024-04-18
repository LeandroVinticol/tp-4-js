//1. Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

const auto = {
  color: "negro",
  marca: "fiat",
  modelo: "palio",
  encendido: false,

  encender: function () {
    if (!this.encendido) {
      this.encendido = true;
      console.log("El auto encendió.");
    } else {
      console.log("El auto ya está encendido.");
    }
  },

  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log("El auto se apago.");
    } else {
      console.log("El auto ya está apagado.");
    }
  },
};

console.log(
  "Estado inicial del auto:",
  auto.encendido ? "Encendido" : "Apagado"
);
auto.encender();
console.log(
  "Estado del auto después de encenderlo:",
  auto.encendido ? "Encendido" : "Apagado"
);
auto.apagar();
console.log(
  "Estado del auto después de apagarlo:",
  auto.encendido ? "Encendido" : "Apagado"
);
