const path = require('path');//Se usa para unir directorios usando / o \
const express  = require('express');
const morgan = require('morgan');//pinta en consola las acciones del cliente
const app = express();

// importing routes

// settings
app.set('port', process.env.PORT || 2000); // En caso de que el servidor no exija un puerto se acepta, en otro caso el 3000
app.set('views', path.join(__dirname, 'views')); // Se indica el directorio de las vistas.
app.set('view engine', 'ejs'); // No es necesario indicarlo en require porque node ya reconoce ejs

// middlewares --> se ejecutan antes que las rutas
app.use(morgan('dev'));//require morgan

// routes

// start server
app.listen(app.get('port'), function () { //Se obtiene el valor del puerto indicado arriba
    console.log(`Server on port  ${app.get('port')}`);
});