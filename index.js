class Usuario {
  constructor(nombre, apellido, libro, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libro = { libro };
    this.mascotas = [mascotas];
  }

  getFullName() {
    FullName = Usuario.nombre + " " + Usuario.apellido;
  }

  addMascota(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i];

      Usuario.mascotas = [args];
    }
  }

  CountMascotas() {
    console.log(Usuario.mascotas.length);
  }

  addBook(nombre, autor) {
    Usuario.libro = { nombre: nombre, autor: autor };
  }

  getBookNames() {
    console.log(libro.nombre);
  }
}

Lucas = new Usuario(Lucas, Lopez, Libro, Perro);
