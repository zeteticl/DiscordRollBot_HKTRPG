var rollbase = require('./rollbase.js');
var mongodb = require('../modules/mongoose.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 
////////////////////////////////////////		

function findmongoose(id) {
    mongodb.functionSwitch.find({ groupid: id }, function (err, data) {
        if (err) {
            console.log(err);
            return
        }

        if (data.length == 0) {
            console.log("No record found")
            return 0;
        }

        console.log(data[0].name);
        return 1;
    })


};

module.exports = {
	findmongoose:findmongoose
};