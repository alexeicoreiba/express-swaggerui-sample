/* jshint node: true */
'use strict';

// const path = require('path');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const cors = require('cors');
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const documentation = YAML.load('./api.yml');

const ping = require('./controllers/ping');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(documentation));

app.get('/api/ping', ping.getPing);

// setup server
const http = require('http');
const PORT = 3000;
const server = http.createServer(app);

server.listen(PORT, function(err) {
    if (err)
        console.log(err);
    else
        console.log('HTTP server on http://localhost:%s', PORT);
});