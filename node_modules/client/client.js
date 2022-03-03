
require('./lib/config');

var retry = require('retry')
    ,util = require('util');

var CBSocketWrapper = require('./lib/cbSocket/socket.js')
    ,controllerAuth = require('./lib/cbSocket/auth.js')
    ,Message = require('./lib/message')
    ;

var logger = require('./lib/logger');

/* Node concentrator for managing socket communication between Client and the main server (Controller) */

var Client = function(email, password) {

    var self = this;

    this.config = {
        email: email,
        password: password,
        cbSocket: CONTROLLER_SOCKET,
        cbAPI: CONTROLLER_API
    }

    this.cbSocketWrapper = new CBSocketWrapper(this.config);

    this.cbSocketWrapper.on('message', function(message) {

        self.emit('message', message);

        var source = message.get('source');
        self.emit(source, message);
        logger.info('CB => Client: ', message)
    });

    // Restart connection process on 'giveUp'
    this.cbSocketWrapper.on('fail', function() {
        self.cbSocketWrapper.giveUp();
        self.connect();
    });

    this.faultTolerantAuth = retry.operation()

    // Send a test message
    var testMessage = new Message({
        destination: 'UID1',
        source: 'CID22'
    });

    this.connect();
}

var EventEmitter = require('events').EventEmitter;
util.inherits(Client, EventEmitter);

Client.prototype.connect = function() {

    var self = this;
    var config = this.config;

    this.faultTolerantAuth.attempt(function(currentAttempt) {

        controllerAuth(config.cbAPI, config.email, config.password).then(function(sessionID) {

            logger.info('Authenticated to Client Controller');
            logger.log('debug', 'sessionID in auth is', sessionID);

            logger.log('debug', 'sessionID in auth is', sessionID);
            self.cbSocketWrapper.connect(sessionID);

            //TODO {"msg":"aggregator_status", "data":"ok"}
        }, function(error) {

            logger.error(error);
            self.faultTolerantAuth.retry(error);
            logger.info('Retrying..');
            // Authorise again after backoff
        })
    });
}

Client.prototype.publish = function(message) {

    var jsonMessage;
    if (message instanceof Message) {
        jsonMessage = message.toJSON();
    } else {
        jsonMessage = message;
    }
    this.cbSocketWrapper.socket.emit('message', jsonMessage);
}

var client = new Client('be63cce6@continuumbridge.com', 'J9vY8DzAzEnTRtLQlzegbIR5IKTThh1kSggxHCsqMeK0IyM7TNv++JWZPQOm6u5H');