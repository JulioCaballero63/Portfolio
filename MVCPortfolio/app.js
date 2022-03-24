const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

const weekRoutes = require('./routes/weeklyRoute');
const taRoutes = require('./routes/taRoute');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(weekRoutes);
app.use(taRoutes);

app.use(errorController.get404);

app.listen(3000);