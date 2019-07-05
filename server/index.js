require('dotenv').config()

const express = require("express");
const massive = require("massive");
const controller = require("./controller/controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;


massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT, () => {
      console.log(`Server listening on port ${SERVER_PORT}.`);
    });
  })
  .catch(err => console.log(err));


app.use(express.json());


app.get('/api/inventory', controller.getAll);
// app.put('/api/product/:id', controller.updateProduct)
app.post('/api/product', controller.create)

