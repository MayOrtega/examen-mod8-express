const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const config = require('./config');
const gameRoutes = require('./routes/gameRoutes');

const app = express();

//body parser nos permite acceder al cuerpo de una petición
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


//Motor de las plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + 'views');
app.use('/game', gameRoutes.routes);

//levantando el servidor
app.listen(config.port, () => {
    console.log('servidor en puerto 8080')
})
