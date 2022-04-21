const EventEmitter = require('events');

const url = 'https://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send a HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'https://'}); // event called with some data passed in event args
    }
}

module.exports = Logger;