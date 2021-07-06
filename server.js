const express = require('express');
const consign = require('consign');
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
var swaggerDocs = require('./src/swagger.json')

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//app.use(express.json());
app.use(bodyParser.json())
consign({ verbose: false })
    .include('sequelize.js')
    .then('/libs/middlewares.js')
    .then('/src/models/')
    .then('/src/controllers')
    .into(app)


consign({ verbose: false })
    .include('/src/controllers')
    .then('/src/routes')
    .then('/libs/boot.js')
    .into(app)

module.exports = app;
