const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

const server = app.listen(port, () => {
  console.log(`escuchando puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(error));
