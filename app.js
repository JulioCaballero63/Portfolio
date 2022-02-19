const http = require('http');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const server = http.createServer();

server.listen(3000);