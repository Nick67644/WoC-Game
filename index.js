  
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
client.on('ready', () =>
{
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            assets: {
                large_image: 'woc'
            },
            details: '4K+ CODING SERVER!',
            buttons: [
                { label: 'Join Me!', url: 'https://discord.gg/XTsCQNd' }
            ]
        }
    });
    console.log('started!');
});
client.login({ clientId: '803978215466074122' });
