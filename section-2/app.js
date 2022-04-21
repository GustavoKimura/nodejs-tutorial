/* window doesn't exists on node js, instead, use global
// global, from standard JavaScript
console.log();
setTimeout();
clearTimeout();
setInterval();
clearInterval();

// it all belong to window object
let message = '';

window.message;
*/

let message = '';

console.log(global.message) // undefined