/*6. Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numPaginas = numPaginas;
  }

  // Métodos getter y setter para ISBN
  get ISBN() {
    return this._ISBN;
  }
  set ISBN(ISBN) {
    this._ISBN = ISBN;
  }

  // Métodos getter y setter para título
  get titulo() {
    return this._titulo;
  }
  set titulo(titulo) {
    this._titulo = titulo;
  }

  // Métodos getter y setter para autor
  get autor() {
    return this._autor;
  }
  set autor(autor) {
    this._autor = autor;
  }

  // Métodos getter y setter para número de páginas
  get numPaginas() {
    return this._numPaginas;
  }
  set numPaginas(numPaginas) {
    this._numPaginas = numPaginas;
  }

  mostrarLibro() {
    console.log(
      `El libro "${this.titulo}" con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`
    );
  }
}

let libro1 = new Libro(
  "123456789",
  "El Principito",
  "Antoine de Saint-Exupéry",
  96
);
let libro2 = new Libro(
  "987654321",
  "Cien años de soledad",
  "Gabriel García Márquez",
  432
);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas) {
  console.log(`El libro "${libro1.titulo}" tiene más páginas.`);
} else if (libro1.numPaginas < libro2.numPaginas) {
  console.log(`El libro "${libro2.titulo}" tiene más páginas.`);
} else {
  console.log("Ambos libros tienen el mismo número de páginas.");
}
