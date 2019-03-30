const socket = new WebSocket ('ws://localhost:8080');

socket.addEventListener('error', function (message) {
    console.log('There was a error procesing your seqest. Find information below.' + message);
});

socket.addEventListener('open', function (message) {
    console.log('You have succsessfully conected.');
    console.log("info: "+message);
})

socket.addEventListener('close',function (message) {
    console.log(' You have disconected from the server.');
    console.log('Info: '+ message);
})

socket.addEventListener('message', function (message) {
    console.log('you have resied the folowing message from the server: \n' +message);
    var nick = document.getElementById('nick');

    var data = JSON.parse(message.data);
    nick.style.top = data.top;
    nick.style.left = data.left;
})

document.body.addEventListener('click', function (event) {
    var nick = document.getElementById('nick');
    var coords = {
        top: event.clientY -50 + 'px',
        left: event.clientX -50 + 'px'
    }
    // nick.style.left = coords.left;
    // nick.style.top = coords.top;
    socket.send(JSON.stringify(coords))
})

