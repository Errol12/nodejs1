var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});


//emit event once
eventEmitter.once('data_received_once', function() {
    console.log('data received succesfully once.');
});

eventEmitter.emit('data_received');