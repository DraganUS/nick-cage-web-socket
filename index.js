const ws = require('ws');

const server = new ws.Server({port:8080});

server.on('connection', function (client) {
    console.log('new client has connected');

    client.on('close', function () {
        console.log('client has disconected');
    })
    client.on('message', function (data) {
        console.log('message from client' + data);
        server.clients.forEach(client =>{
            if (client.readyState === ws.OPEN) {
                client.send(data);
            }
        })
    })
})
