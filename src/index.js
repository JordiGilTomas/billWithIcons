import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';
import router from './router/router.js';
import './env.js';
// import * as to not get eslint no named import.
import * as util from './util.js';

const { dirname } = util;

const app = express();

app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: 'src/views/layouts',
  partialsDir: 'src/views/partials',
}));

app.set('view engine', 'hbs');

app.set('views', path.join(dirname, 'views'));

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(dirname, 'public')));

app.use(express.json());

app.use(express.urlencoded({
  extended: false,
}));

app.use('/', router);

app.listen(app.get('port'), () => {
  console.log(`Servidor iniciado en puerto ${app.get('port')}`);
});
