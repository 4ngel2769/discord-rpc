var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "", // Text displayed inside the presence.
assets : {
large_image : "", // The of the image set in the developer portal
large_text : "large_text", // The text displayed when hovering over the large image.
small_image : "", // The of the image set in the developer portal
small_text : "small_text" // The text displayed when hovering over the small image.
},
buttons: [{label : "" , url: ""}, // Label = displayed text on the button | url = The link of the button
{label: "", url: ""}] // Label = displayed text on the button | url = The link of the button
}
})
})
client.login({ clientId : "" }).catch(console.error); // The ID of your application. 