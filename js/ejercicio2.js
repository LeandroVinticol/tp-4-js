/*2. Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(`Se ingresaron $${cantidad} a la cuenta.`);
    } else {
      console.log("La cantidad ingresada debe ser mayor a 0.");
    }
  },

  extraer: function (cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      console.log(`Se extrajo $${cantidad} de la cuenta.`);
    } else {
      console.log(
        "La cantidad que solicito es mayor al saldo disponible o no ingreso una cantidad mayor a 0."
      );
    }
  },

  informar: function () {
    console.log(`Titular de la cuenta: ${this.titular}`);
    console.log(`Saldo disponible: $${this.saldo}`);
  },
};

console.log("Descripción inicial del estado de la cuenta:");
cuenta.informar();

// Ingresar $100 a la cuenta
cuenta.ingresar(100);

console.log("Descripción después de ingresar dinero:");
cuenta.informar();

// Extraer $50 de la cuenta
cuenta.extraer(50);

console.log("Descripción después de extraer dinero:");
cuenta.informar();
