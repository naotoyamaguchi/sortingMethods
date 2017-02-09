const express = require('express');
const bodyparser = require('body-parser');
const bubblesortRouter = require('./routes/bubblesort');
const handlebars = require('express-handlebars');

let app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

const hbs = handlebars.create(
  {
    extname: '.hbs',
    defaultLayout: 'app'
  }
);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use('/bubblesort', bubblesortRouter);

module.exports = app;