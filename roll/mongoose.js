var rollbase = require('./rollbase.js');
var mongodb = require('../modules/mongoose.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 
////////////////////////////////////////		

function findmongoose(id) {
    mongodb.functionSwitch.findOne({ groupid: id }, function (err, data) {
        if (err) {
            console.log(err);
            return
        }

        if (data == 0) {
            console.log("No record found")
            return 0;
        }

        console.log('date = ' + data);
        console.log('date _id = ' + data._id);
        console.log('date functionswitch = ' + data.functionswitch);
        console.log('date groupid = ' + data.groupid);
        console.log('date [0] = ' + data[0]);
        console.log('date [1] = ' + data[1]);
        console.log('date [2] = ' + data[2]);
        console.log('date [3] = ' + data[3]);

        return data.functionswitch;
    })


};

module.exports = {
    findmongoose: findmongoose
};