var rollbase = require('./rollbase.js');
var mongodb = require('../modules/mongoose.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 
////////////////////////////////////////		

async function switchfind(id, name, callback2) {
    mongodb.functionSwitch.findOne({
        groupid: id, functionname: name
    }, function (err, data) {
        if (err) {
            console.log(err);
            callback2(null);
            return;
        }

        else if (!data) {
            console.log("No record found")
            callback2(null);
            return;
        }
        console.log('date = ' + data);
        console.log('data.functionswitch = ' + data.functionswitch);
         callback2(2);
        return;
    })
};

module.exports = {
    switchfind: switchfind
};