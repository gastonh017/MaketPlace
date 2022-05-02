//requerimos el módulo Express y almacenamos la funcion en la constante express
const express = require('express');
//utilizo el metdo path paa las rutas absolutas
const path = require('path');
//Dicha constante, que es una funcion, la almacenamos en app a la cual se va a tener desde acá todas las funcionalidades de express
const app = express();
// genero en la constante publicPath la ruta absoluta a la carpeta public asi la utilizo a lo largo del ejercicio
const publicPath = path.resolve(__dirname, './public') ;
//informamos a la aplicacion app.js que queremos hacer uso de unos archivos estáticos
app.use(express.static(publicPath));
// se genera, con el método LISTEN, la apertura del servidor indicando el pueto y opcinalmente un mensaje indicador.
const puerto = 3000;    //Es buena práctica definir el pueto y en el mensaje de la apretura agregar el nombre del puerto
app.listen(puerto,()=>console.log('Levantando un servidor con Express en el puerto ' + puerto));

//llamo al archivo html para verlo desded el puerto 
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});

//llamo al archivo html para verlo desded el puerto 
app.get('/register',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});
app.get('/login',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});

