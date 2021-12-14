  
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
client.on('ready', () =>
{
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            assets: {
                large_image: 'woc', //WoC
                small_image: 'pycord_logo', //Pycord
                small_text: 'Pycord!',
                large_text: "World of Coding!",
            },

            details: '11k+ CODING SERVER/REDDIT!', 
            buttons: [
                { label: 'Join World of Coding!', url: 'https://discord.gg/pkShK9ax2X' }, //woc (Partner of Pycord)
                { label: 'Join r/code!', url: 'https://www.reddit.com/r/code'}, //r/code (Reddit page)
            ]
        }
    });
    console.log('started!');
});
client.login({ clientId: '803978215466074122' });