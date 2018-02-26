var mongoose = require ("mongoose"); // The reason for this demo.
var allswitch = {};
// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring = process.env.mongoURL || 
'mongodb://testroll:testroll@ds243768.mlab.com:43768/testroll';
// Makes connection asynchronously.Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
if (err) { 
console.log ('ERROR connecting to: ' + uristring + '. ' + err);
} else {
console.log ('Succeeded connected to: ' + uristring);
allswitch = findmongoose();
console.log(allswitch);
}
});

// This is the schema.Note the types, validation and trim
// statements.They enforce useful constraints on the data.
var functionSchema = new mongoose.Schema({
groupid: String,
functionswitch: String 
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'PowerUsers' collection in the MongoDB database
var functionSwitch = mongoose.model('functionSwitchs', functionSchema);


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
function findmongoose() {
var findall = {};
functionSwitch.find({},function (err, findall) {
if (err) return console.error(err);
return findall;
})


}

module.exports = {
	findmongoose:findmongoose,
	allswitch:allswitch
};

