const clients = []
const { Client } = require('discord.js-selfbot-v13')
try{
const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.get('/', (req, res) => {
  res.send('Best Managed Bot By Kartal!')
})


const fs = require('fs');

// Replace "example.txt" with the name of your file
const filename = './token.txt';

// Read the file
fs.readFile(filename, 'utf8',async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Split the data by lines
const lines = data.split('\n');
// Read each line
for (const line of lines) {
const client = new Client({
  checkUpdate: false,
})
/////

const userID = ["579644676609671168"]

  

client.on('message', function(message) {
  if (userID.includes(message.author.id))
 if (message.content === 'ms') {
 const kartal = client.channels.cache.find(channel => channel.id === "982299166300569650");
   kartal.send("owo s all");
 }
});

client.on('message', function(message) {
  if (userID.includes(message.author.id))
 if (message.content === 'd') {
 const kartal = client.channels.cache.find(channel => channel.id === "982299166300569650");
   kartal.send("owo daily");
 }
});

client.on('message', function(message) {
  if (userID.includes(message.author.id))
 if (message.content === 'sm') {
 const kartal = client.channels.cache.find(channel => channel.id === "982299166300569650");
   kartal.send("owo cf all");
 }
});

      client.login(line).catch(() => {
  console.log(`token is invalid`)
})
  

  }
})

} catch (err) {
  if(err.message.startsWith('401: Unauthorized')) {
  process.exit()
}
if(err.message.startsWith('The operation was aborted.')) {
    process.exit()
}
}
