var rollbase = require('./rollbase.js');
var mongodb = require('../modules/mongoose.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 
////////////////////////////////////////		

function switchfind(id, name) {
    var check;
    mongodb.functionSwitch.findOne({ groupid: id, functionname: name }, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }

        else if (!data) {
            console.log("No record found")
            return;
        }
        else
            console.log('date = ' + data);
            check = data;
        //console.log('data.functionswitch = ' + data.functionswitch);
        return '0';
    })
    return check;
};

module.exports = {
    switchfind: switchfind
};