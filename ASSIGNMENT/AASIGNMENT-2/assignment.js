const { EventEmitter } = require('events');

class Activity extends EventEmitter {}

const p = new Activity();

p.on('login', () => {
    console.log('Student logged Successfully');
});

p.on('assignment', () => {
    console.log('Assignment Submitted');
});

p.on('logout', () => {
    console.log('Student logged out');
});

p.on('exit', () => {
    console.log('Exiting application');
});

p.emit('login');
p.emit('assignment');
p.emit('logout');
p.emit('exit');