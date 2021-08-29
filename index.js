  
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
client.on('ready', () =>
{
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            assets: {
                large_image: 'pycord_logo' //woc
            },
            details: '8k+ CODING SERVER!', //Pycord new Discord.py!
            buttons: [
                { label: 'Join World of Coding!', url: 'https://discord.gg/pkShK9ax2X' }, //woc (Partner of Pycord)
                { label: 'Join Pycord!', url: 'https://discord.gg/pycord'} //Pycord 
            ]
        }
    });
    console.log('started!');
});
client.login({ clientId: '803978215466074122' });