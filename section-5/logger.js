//(function (exports, require, module, __filename, __dirname) { // Module Wrapper Function
const url = 'https://mylogger.io/log';

console.log(__filename);
console.log(__dirname);

function log(message) {
    // Send a HTTP request
    console.log(message);
}

// module.exports.log = log; // object
module.exports = log; // function
//})