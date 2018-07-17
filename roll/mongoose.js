var rply = { type: 'text' }; //type是必需的,但可以更改
const mongoose = require('mongoose');
let uristring = process.env.mongoURL ||
    'mongodb://testroll:testroll@ds243768.mlab.com:43768/testroll';
mongoose.connect(uristring, { useNewUrlParser: true });
//export 
var switchJson;
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
        // console.log('allswitch: ' + allswitch);
        functionSwitch.find({})
            .exec(function (error, posts) {
                switchJson = posts.map(function (p) {
                    return p.toJSON()
                });
            })
    }
});

function onOff(id, name) {
    switchJson.forEach(function (functionSwitch) {
        if (functionSwitch.groupid == id && functionSwitch.function_name == id) {
            console.log(functionSwitch.switch);
            return functionSwitch.switch;

        }
    });
};



function updateSwitch(groupid, functionname, functionswitch) {

    functionSwitch.update({
        groupid: groupid,
        function_name: functionname
    }, { switch: functionswitch }, { multi: true, upsert: true, new: true, setDefaultsOnInsert: true }, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
            functionSwitch.find({})
                .exec(function (error, posts) {
                    switchJson = posts.map(function (p) {
                        return p.toJSON()
                    });
                })
        }
    })
    rply.text = "變更成功";
    return rply;

};

var functionSchema = new mongoose.Schema({
    groupid: String,
    function_name: String,
    switch: String
});


// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'PowerUsers' collection in the MongoDB database
var functionSwitch = mongoose.model('functionSwitchs', functionSchema);

module.exports = {
    updateSwitch: updateSwitch,
    onOff: onOff
};



