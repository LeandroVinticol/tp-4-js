/*7. Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.*/

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  // Método para verificar si dos contactos son iguales
  esIgual(contacto) {
    return this.nombre === contacto.nombre;
  }
}

class Agenda {
  constructor(tamaño = 10) {
    this.contactos = [];
    this.tamaño = tamaño;
  }

  agregarContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena. No se puede añadir más contactos.");
    } else if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe en la agenda.");
    } else {
      this.contactos.push(contacto);
      console.log("Contacto añadido correctamente.");
    }
  }

  existeContacto(contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].esIgual(contacto)) {
        return true;
      }
    }
    return false;
  }

  listarContactos() {
    console.log("Lista de contactos:");
    for (let i = 0; i < this.contactos.length; i++) {
      console.log(
        `Nombre: ${this.contactos[i].nombre}, Teléfono: ${this.contactos[i].telefono}`
      );
    }
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      console.log(
        `El teléfono de ${nombre} es: ${contactoEncontrado.telefono}`
      );
    } else {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex((c) => c.esIgual(contacto));
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      console.log("Contacto eliminado correctamente.");
    } else {
      console.log("El contacto no existe en la agenda.");
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.tamaño;
  }

  huecosLibres() {
    return this.tamaño - this.contactos.length;
  }
}

function mostrarMenu(agenda) {
  while (true) {
    const opcion = prompt(`Seleccione una opción:
        1. Añadir contacto
        2. Buscar contacto
        3. Eliminar contacto
        4. Listar contactos
        5. Verificar agenda llena
        6. Verificar huecos libres
        7. Salir`);

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        agenda.agregarContacto(new Contacto(nombre, telefono));
        break;
      case "2":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;
      case "3":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        agenda.eliminarContacto(new Contacto(nombreEliminar));
        break;
      case "4":
        agenda.listarContactos();
        break;
      case "5":
        console.log(
          agenda.agendaLlena()
            ? "La agenda está llena."
            : "La agenda no está llena."
        );
        break;
      case "6":
        console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;
      case "7":
        console.log("Saliendo del programa...");
        return;
      default:
        console.log(
          "Opción inválida. Por favor, seleccione una opción válida."
        );
    }
  }
}

const agendaTelefonica = new Agenda();
mostrarMenu(agendaTelefonica);
