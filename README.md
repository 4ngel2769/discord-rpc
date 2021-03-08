## A guide to getting a functional custom presence on Discord.

#### FAQ
1. 1. **Q.** What is a custom presence?
 2.**A.** A custom presence is essentially what the name states; a customizable presence that is displayed on your Discord profile. 
>![Custom Presence Example](https://i.ibb.co/cXs5GCT/image.png)
2. 1. **Q.** Is it against the ToS?
 2. **A.** No, custom presences are a part of Discord and are not against any rule of Discord. 
>(you can read more about Discord's rules here: [Terms of Service](https://discord.com/terms), [Guidelines](https://discord.com/guidelines))


### Get started
To begin with, head over to Discord's developer page (https://discord.com/developers/applications) and create a new application. However you decide to name it is the name that will appear on your presence. 
My application is named "Helix", thus the displayed game name will be "Helix"
![RPC Name Example](https://i.ibb.co/KDnb9nV/image.png)
```
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
```
