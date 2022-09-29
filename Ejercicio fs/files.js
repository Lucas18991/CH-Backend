const fs = require("fs");

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }
  getAll() {
    try {
      const data = fs.readFileSync(`./${this.nombreArchivo}.txt`, "utf-8");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  save(id, title, price) {
    try {
      fs.appendFileSync(`./${this.nombreArchivo}.txt`, {
        id: id,
        title: title,
        price: price,
      });
      const data = fs.readFileSync(`./${this.nombreArchivo}.txt`, "utf-8");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  getbyid(id) {
    try {
      const data = fs.readFileSync(`./${this.nombreArchivo}.txt`, "utf-8");
      let valorbusq = data.find((o) => o.id === id);

      console.log(valorbusq);
    } catch (error) {
      console.log(error);
    }
  }

  deletebyid(id) {
    try {
      const data = fs.readFileSync(`./${this.nombreArchivo}.txt`, "utf-8");
      let valorbusq = data.find((o) => o.id === id);

      console.log(valorbusq);
    } catch (error) {
      console.log(error);
    }
  }

  deleteall() {
    try {
      const data = fs.writeFileSync(`./${this.nombreArchivo}.txt`, "");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
