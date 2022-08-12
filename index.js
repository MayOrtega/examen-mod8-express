const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const config = require('./config');
const gameRoutes = require('./routes/gameRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/game', gameRoutes.routes);

app.listen(config.port, () => {
    console.log('server listening on port 8080');
})