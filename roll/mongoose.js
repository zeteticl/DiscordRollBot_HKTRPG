var rollbase = require('./rollbase.js');
var mongodb = require('../modules/mongoose.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 
////////////////////////////////////////		

function findmongoose(id, functionname) {
    mongodb.functionSwitch.findOne({ groupid: id,functionname: luck }, function (err, data) {
        if (err) {
            console.log(err);
            return
        }

        if (data == null) {
            console.log("No record found")
            return 1;
        }
        console.log('date = ' + data);
        return data.functionswitch;
    })

};

module.exports = {
    findmongoose: findmongoose
};