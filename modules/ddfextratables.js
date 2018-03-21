// Load `*.js` under roll directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync('./table/').forEach(function (file) {
	if (file.match(/\.txt$/) !== null && file !== 'index.txt') {
		var name = file.replace('.txt', '');
		exports[name] = require('fs').readFileSync('./table/' + file, 'utf8').split(' ');
	//判斷式  [0]2dx8-2+10,[1]2,[2]dx,[3]8,[4]-2+10,[5]-2,[6]-,[7]2,[8]+10,[9]+,[10]10  
		console.log(name + ' ' + ' ' + exports[name][0])
	}
});


//用來呼叫骰組,新增骰組的話,要寫條件式到下面呼叫 
//格式是 exports.骰組檔案名字.function名

/*
module.exports = {
	parseInput: parseInput
};

*/