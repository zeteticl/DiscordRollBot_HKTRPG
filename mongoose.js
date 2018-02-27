
// Clear out old data
/*
functionSwitch.remove({ groupid: '002'}, function(err) {
if (err) {
console.log ('error deleting old data.');
}
});
*/

/*
// Creating more users manually
var Switch = new functionSwitch ({
groupid: '002',
functionswitch: '0' 

});
Switch.save(function (err) {if (err) console.log ('Error on save!' + err)});
*/


//用來呼叫骰組,新增骰組的話,要寫條件式到下面呼叫 
//格式是 exports.骰組檔案名字.function名
function findmongoose(functionSwitch) {
var findall = {};
functionSwitch.find({},function (err, findall) {
if (err) return console.error(err);
console.log(findall);
return findall;
})
}

module.exports = {
	findmongoose:findmongoose

};

