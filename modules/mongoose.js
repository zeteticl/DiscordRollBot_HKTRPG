const mongoose = require('mongoose');
let uristring = process.env.mongoURL ||
    'mongodb://testroll:testroll@ds243768.mlab.com:43768/testroll';
mongoose.connect(uristring);

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
        // console.log('allswitch: ' + allswitch);

    }
});

var functionSchema = new mongoose.Schema({
    groupid: String,
    functionname: String,
    functionswitch: String
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'PowerUsers' collection in the MongoDB database
var functionSwitch = mongoose.model('functionSwitchs', functionSchema);



function findmongoose(groupid) {
    functionSwitch.find({ location: groupid }, function (err, data) {
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

