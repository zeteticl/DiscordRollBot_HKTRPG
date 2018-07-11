const mongoose = require('mongoose');
let uristring = process.env.mongoURL ||
    'mongodb://testroll:testroll@ds243768.mlab.com:43768/testroll';
mongoose.connect(uristring);
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
                switchJson.forEach(function (functionSwitch) {
                    if (functionSwitch.groupid == '002') console.log('DONE');
                });
            })
    }
});


function switchfind(id, name) {
    var idcheck = functionSwitch.find(function (item, index, array) {
        return idcheck.groupid === '002';  // 取得陣列 like === '蘿蔔泥'
    });
    console.log(findLike);

};

function updateSwitch(wherestr, updatestr) {
    functionSwitch.update(wherestr, updatestr, { multi: true }, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })

};

function findSwitch(wherestr, function_type, function_name) {
    functionSwitch.find({ wherestr }, function (err, docs) {
        console.log(docs[0]);
        eval("return docs[0]." + function_type + "." + function_name);

    });

}

function findSwitch(wherestr, function_type, function_name) {
    var small = new functionSwitch({
        groupid: '002',
        function_name: 'FKKKK',
        switch: '1'
    });
    small.save(function (err) {
        if (err) return handleError(err);
        // saved!
    });
}



var functionSchema = new mongoose.Schema({
    groupid: String,
    function_name: String,
    switch: String
});


// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'PowerUsers' collection in the MongoDB database
var functionSwitch = mongoose.model('functionSwitchs', functionSchema);

module.exports = {
    functionSwitch: functionSwitch
};



