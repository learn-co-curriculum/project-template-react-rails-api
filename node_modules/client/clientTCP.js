
var Client = require('./client')
    ,TCPSocket = require('./lib/tcpSocket/socket')
    ,Heartbeat = require('./lib/heartbeat')
    ;

var args = process.argv.slice(2);

var ClientTCP = function(email, password) {

    var client = new Client(email, password);

    var tcpSocket = new TCPSocket(5000);

    tcpSocket.on('message', function(message) {

        // Take messages from the client and relay them to the controller
        controllerSocket.toController.push(message);
        logger.info('Client => Controller: ', message);
    });

    var heartbeat = new Heartbeat(controllerSocket, clientSocket);
    heartbeat.start();
}

module.exports = ClientTCP;