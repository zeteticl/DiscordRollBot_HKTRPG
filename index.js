var express = require('express');
var bodyParser = require('body-parser');
//var app = express();
//var jsonParser = bodyParser.json();
var channelSecret = process.env.DISCORD_CHANNEL_SECRET;
const Discord = require('discord.js');
const client = new Discord.Client();
// Load `*.js` under modules directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync(__dirname + '/modules/').forEach(function (file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
		var name = file.replace('.js', '');
		exports[name] = require('./modules/' + file);
	}
});


client.once('ready', () => {
	console.log('Ready!');
});

client.login(channelSecret);

client.on('message', message => {
	console.log(message.content);
	let rplyVal = {};
	//訊息來到後, 會自動呼叫handleEvent 分類,然後跳到analytics.js進行骰組分析
	//如希望增加修改骰組,只要修改analytics.js的條件式 和ROLL內的骰組檔案即可,然後在HELP.JS 增加說明.
	try {
		if (message.author.bot === false) {
			rplyVal = exports.analytics.parseInput(message.content);
		}
	} catch (e) {
		console.log('catch error');
		console.log('Request error: ' + e.message);
	}
	if (rplyVal) {
		//exports.replyMsgToLine.replyMsgToLine(rplyToken, rplyVal, options);
		message.channel.send(rplyVal.text);
		console.log("rplyVal: " + rplyVal);
	} else {
		console.log('Do not trigger');
	}
});