//var express = require('express');
//var bodyParser = require('body-parser');
//var app = express();
//var jsonParser = bodyParser.json();
var channelKeyword = process.env.DISCORD_CHANNEL_KEYWORD || "";
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
	console.log('message.content ' + message.content);
	console.log('channelKeyword ' + channelKeyword);
	let rplyVal = [];

	let msgSplitor = (/\S+/ig);
	let mainMsg = message.content.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階

	//訊息來到後, 會自動呼叫handleEvent 分類,然後跳到analytics.js進行骰組分析
	//如希望增加修改骰組,只要修改analytics.js的條件式 和ROLL內的骰組檔案即可,然後在HELP.JS 增加說明.
	try {
		if (message.author.bot === false) {
			if (channelKeyword != "" && trigger == channelKeyword) {
				console.log('channelKeyword && trigger == channelKeyword');
				mainMsg.shift();
				rplyVal = exports.analytics.parseInput(mainMsg.join(' '));
			} else {
				if (channelKeyword == "") {
					console.log('channelKeyword == ""');
					rplyVal = exports.analytics.parseInput(message.content);
				}

			}

		} else {

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