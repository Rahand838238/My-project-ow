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
 if (message.content === 'kartal') {
 const kartal = client.channels.cache.find(channel => channel.id === "1117105076033560678");
   kartal.send("p");
 }
});

  
client.on('ready', async () => {

console.log(`${client.user.tag} is Ready!`)
  
  

const channel = await client.channels.cache.get("1115724946132447242")
let chats = [
  `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
  `The way to get started is to quit talking and begin doing.`,
  `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.`,
  `If life were predictable it would cease to be life, and be without flavor.`,
  `Life is what happens when you're busy making other plans.`,
  `Whoever is happy will make others happy too.`,
  `When you reach the end of your rope, tie a knot in it and hang on.`,
  `It is during our darkest moments that we must focus to see the light.`,
  `Never let the fear of striking out keep you from playing the game.`,
  `Life is either a daring adventure or nothing at all.`,
  `The only impossible journey is the one you never begin.`,
  `The purpose of our lives is to be happy.`,
  `Life is what happens when you're busy making other plans.`,
  `I never dreamed about success, I worked for it.`,
  `Try not to become a man of success. Rather become a man of value.`,
  `I failed my way to success`,
  `You miss 100% of the shots you don't take.`,
  `Dreaming, after all, is a form of planning.`,
  `I would rather die of passion than of boredom.`,
  `If you're offered a seat on a rocket ship, don't ask what seat! Just get on`,
  `You may be disappointed if you fail, but you are doomed if you don't try`
]  


setInterval(() => {
const msg = chats[Math.floor(Math.random()*chats.length)]
setTimeout(() => {
channel.send(msg)
}, 300)
}, 13000)

})

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
