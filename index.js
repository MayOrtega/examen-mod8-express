const express = require('express');
const cors = require('cors');
const fs = require('fs')
const bodyParser = require('body-parser');
const config = require('./config');
const gameRoutes = require('./routes/gameRoutes');
 
const app = express();
 
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
 
// Motor de plantillas, definición de rutas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//  
 
app.use('/web', gameRoutes.routes);
 
// Levanta servidor
app.listen(config.port, () => {
    console.info('server listening on port 8080');
})
 
 
