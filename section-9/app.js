const Logger = require('./logger');

const logger = new Logger();

// Register a listener
logger.on('messageLogged', (eventArguments) => {
    console.log(eventArguments);
});

logger.log('Message!');