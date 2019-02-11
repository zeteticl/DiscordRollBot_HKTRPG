var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
var channelSecret = process.env.DISCORD_CHANNEL_SECRET;
// Load `*.js` under modules directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync(__dirname + '/modules/').forEach(function (file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./modules/' + file);
  }
});
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login(channelSecret);

client.on('message', message => {
  console.log(message.content);

  if (message.content === '!ping') {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.');
  }
  let rplyVal = {};

  try {
    rplyVal = exports.analytics.parseInput(message.content);
  } catch (e) {
    console.log('catch error');
    console.log('Request error: ' + e.message);
  }
  //把回應的內容,掉到replyMsgToLine.js傳出去
  if (rplyVal) {
    message.channel.send(rplyVal);
  } else {
    //console.log('Do not trigger'); 
  }
 // res.send('ok');
});