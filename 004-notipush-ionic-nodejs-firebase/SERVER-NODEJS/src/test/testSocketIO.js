var app = require('express')();
var http = require('http').createServer(app);
var server = require('socket.io')(http);


    server.on('connection', function (socket)
    {
        console.log('Se ha conectado un cliente con id ' + socket.id);
        clientes.push(socket.id);
        console.log("cliente almacenado : " + clientes.toString());

        socket.on('mensaje', (mensaje) => {
        console.log(mensaje);
        });
        socket.emit("mensajeFromServer", {text: "hola, soy el servidor"});
        socket.emit("mensajeFromServer2", {text: "hola, soy el servidor2"});
    });


http.listen(3000, function(){
  console.log('listening on *:3000');
});
