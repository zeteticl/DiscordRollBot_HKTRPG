var rollbase = require('./rollbase.js');
var mongodb = require('../modules/mongoose.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 
////////////////////////////////////////		

function switchfind(id, name, functionswitch) {
    mongodb.functionSwitch.findOne({
        groupid: id, functionname: name
    }, function (err, data) {
        if (err) {
            console.log(err);
            functionswitch(null);
            return;
        }

        else if (!data) {
            console.log("No record found")
            functionswitch(null);
            return;
        }
        else {
            console.log('date = ' + data);
            console.log('data.functionswitch = ' + data.functionswitch);
            functionswitch(data.functionswitch);
        }
    })
};

module.exports = {
    switchfind: switchfind
};