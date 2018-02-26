var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
var channelAccessToken = process.env.LINE_CHANNEL_ACCESSTOKEN;
var channelSecret = process.env.LINE_CHANNEL_SECRET;
var allswitch = {};
// Load `*.js` under modules directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync(__dirname + '/modules/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./modules/' + file);
  }

});
setTimeout(function(){allswitch = exports.mongoose.findmongoose(); }, 10000);
console.log(allswitch);

var options = {
	host: 'api.line.me',
	port: 443,
	path: '/v2/bot/message/reply',
	method: 'POST',
	headers: {
	'Content-Type': 'application/json',
	'Authorization':'Bearer ' + channelAccessToken
	}
}
app.set('port', (process.env.PORT || 5000));
// views is directory for all template files
app.get('/', function(req, res) {
//	res.send(parseInput(req.query.input));
	res.send('Hello');
});
app.post('/', jsonParser, function(req, res) {
	let event = req.body.events[0];
	//let rplyToken = event.replyToken;
	let rplyVal = {};
	console.log(event.source.groupId);
	console.log(event.source.userId);
	console.log(event);
	
	/*
2018-02-25T15:42:02.600415+00:00 app[web.1]: { type: 'message',
2018-02-25T15:42:02.600418+00:00 app[web.1]:   replyToken: '37b6f6db6f3bf13',
2018-02-25T15:42:02.600421+00:00 app[web.1]:   source: 
2018-02-25T15:42:02.600422+00:00 app[web.1]:    { groupId: 'C8a4122fcad12d451250c6',
2018-02-25T15:42:02.600424+00:00 app[web.1]:      userId: 'U1a17e51f220df39f0293d',
2018-02-25T15:42:02.600426+00:00 app[web.1]:      type: 'group' },
2018-02-25T15:42:02.600428+00:00 app[web.1]:   timestamp: 1519573321892,
2018-02-25T15:42:02.600430+00:00 app[web.1]:   message: { type: 'text', id: '7533522361', text: '1d100' } }
*/
	//訊息來到後, 會自動呼叫handleEvent 分類,然後跳到analytics.js進行骰組分析
	//如希望增加修改骰組,只要修改analytics.js的條件式 和ROLL內的骰組檔案即可,然後在HELP.JS 增加說明.
	try {
	rplyVal = handleEvent(event);
	} 
	catch(e) {
		console.log('catch error');
		console.log('Request error: ' + e.message);
	}
	//把回應的內容,掉到replyMsgToLine.js傳出去
	if (rplyVal) {
	exports.replyMsgToLine.replyMsgToLine(event.replyToken, rplyVal, options); 
	} else {
	//console.log('Do not trigger'); 
	}
	res.send('ok');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

function handleEvent(event) {
  switch (event.type) {
    case 'message':
      const message = event.message;
      switch (message.type) {
        case 'text':
          return exports.analytics.parseInput(event); 
        default:
           break;
      }
    case 'follow':
		break;
    case 'unfollow':
       break;
    case 'join':
break;
    case 'leave':
       break;
    case 'postback':
       break;
    case 'beacon':
      break;
    default:
       break;
  }
}