class Usuario {
  constructor(nombre, apellido, libro, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libro = [];
    this.mascotas = [];
  }

  getFullName() {
    const FullName = `El nombre es ${this.nombre} y su apelldo es ${this.apellido}`;

    console.log(FullName);
  }

  addMascota(NombreMascotas) {
    this.mascotas.push(NombreMascotas);
  }

  CountMascotas() {
    console.log(this.mascotas.length);
  }

  addBook(nombre, autor) {
    this.libro.push({ nombre: nombre, autor: autor });
  }

  getBookNames() {
    let NombreLibros = this.libro.map(({ nombre }) => {
      return nombre;
    });
    console.log(NombreLibros);
  }
}

const Lucas = new Usuario("Lucas", "Lopez", [], []);
Lucas.addBook("La Historia Interminable", "Michael Ende");
Lucas.getBookNames();
Lucas.addMascota("perro");
Lucas.addMascota("Gato");
Lucas.getFullName();
Lucas.CountMascotas();
console.log(Lucas);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  Gonza;
}
