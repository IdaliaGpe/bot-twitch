import tmi from 'tmi.js';

const opts = {
    identity: {
        username: 'PA_Aizha',
        password: 'oauth:ecf8m1o55u93l8q00trbwwokbrvpek'
    },
    channels: [
        'PA_Aizha'
    ]
}

const client = new tmi.client(opts);

client.on('connected', (address, port)=>{
    client.say(opts.channels[0], 'Wassap guys');
    console.log(`Bot listening at: ${address}:${port}`);
});

client.on('message', (target, ctx, msg, self) =>{
    if(msg === 'ping'){
        client.say(target, 'pong');
    }
});

client.connect();