## A detailed guide to getting a functional custom presence with buttons on Discord!
### Table of contents
* [FAQ](#faq)
* [Get Started](#get-started)
* [Assets](#assets)
* [Code Part](#code)


#### FAQ
1. **Q.** What is a custom presence? **A.** A custom presence is essentially what the name states; a customizable presence that is displayed on your Discord profile. 
>![Custom Presence Example](https://i.ibb.co/cXs5GCT/image.png)
2. **Q.** Is it against the ToS? **A.** No, custom presences are a part of Discord and are not against any rule of Discord. 
>(you can read more about Discord's rules here: [Terms of Service](https://discord.com/terms), [Guidelines](https://discord.com/guidelines))


## Get started
To begin with, head over to Discord's developer page (https://discord.com/developers/applications) and create a new application. However you decide to name it is the name that will appear on your presence. 
My application is named "Helix", thus the displayed game name will be "Helix".
![RPC Name Example](https://i.ibb.co/KDnb9nV/image.png)

#### Assets
Next you will go to the **Art Assets** tab under **Rich Presence** (figure [A1](#a1)) and add your large image ([A2](#a2)) and small image ([A3](#a3)) to the rich presence assets and give them a name ([A4](#a4)).
Keep in mind! All images need to be a minimum of 512 x 512 pixels.



###### A1 
![Figure A1](https://i.ibb.co/cwyLn8b/image.png)
###### A2
![Figure A2](https://i.ibb.co/SmrdGSW/image.png)
###### A3
![Figure A3](https://i.ibb.co/RjRmhVx/image.png)
###### A4
![Figure A4](https://i.ibb.co/CWcGZyS/image.png)

### Code
Now that the image part is done we can get to coding!

In a folder create an `index.js` file with the following contents.

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

Replace the **details** field `your-text` with the text you want to be displayed under the game name.
![details field](https://i.ibb.co/610LJpq/image.png)

`Button1` is the name of the first button and `Link1` is the link activated when clicking the first button on the presence. `Button2` and `Link2` are the variables of the second button on the presence.
Fill the fields accordignly.

The `ApplicationID` field is where you have to insert your application's ID found on the **General Information** tab of the application.
![ID](https://i.ibb.co/pzsqH98/image.png)

For the next step you can download the `package.json` on this repository. After that you can install the needed dependencies using `npm i discord-rpc`.
