const moment = require("moment");
const http = require("http");
let objeto = {};

const server = http.createServer((peticion, respuesta) => {
  //acciones
  respuesta.statusCode = 200;

  respuesta.end("Hola world");
  console.log(peticion);
});
const port = 9890;
const connectServer = server.listen(port, () => {
  console.log(
    `servidor corriendo en el puerto ${connectServer.address().port}`
  );
});

const aleatorio = (objeto) => {
  for (let i = 0; i < 999; i++) {
    const random = Math.floor(Math.random() * 20) + 1;
    const hasKey = objeto.hasOwnProperty(random);
    if (hasKey) {
      objeto[random] += 1;
    } else {
      objeto[random] = 1;
    }
  }
};

aleatorio(objeto);
console.log(objeto);

FechaNacimiento = "19910918";
d = moment("20111031", "YYYYMMDD").fromNow();
console.log(d);
