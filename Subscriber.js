let mqtt = require('mqtt')

let options = {
    host: 'a014b958335a4ba195e2715edf3ee571.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'Morteza',
    password: 'Morteza9625801'
}

//initialize the MQTT client
let client = mqtt.connect(options);

//setup the callbacks
client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    //Called each time a message is received
    console.log('Received message:', topic, message.toString());
    let data = message.toString()


});

// subscribe to topic 'my/test/topic'
client.subscribe('my/test/topic');

