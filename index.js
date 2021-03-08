var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY',
    {pid: process.pid, activity : {
	details : "your-text",
	assets : {
		large_image : "your-large-image", 
		large_text : "your-large-text" },
		buttons : [{label : "Button1" , url : "Link1"}, 
		{label : "Button2",url : "Link2"}]}
	})
})

client.login({ clientId : "ApplicationID" }).catch(console.error);
