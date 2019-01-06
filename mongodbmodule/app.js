var mongodb = require('mongodb').MongoClient;

var url = 'mongodb://localhost/demo1';
mongodb.connect(url,function(err,dbconn){
    console.log('connected');
    var database = dbconn.db('demo1');
    var cursor = database.collection('demo1').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
    dbconn.close();
})