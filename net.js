var net = require('net');
var server = net.createServer(function(socket){
    console.log('connected！');
    socket.on('data', function(data){
        socket.write('you said ' + data + '\n');
    });
    socket.on('end', function(){
        console.log('disconnected');
    });
});
server.listen(8080);
console.log('server start listening on 8080')
