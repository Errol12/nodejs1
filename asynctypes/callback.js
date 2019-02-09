var fs = require('fs');

var myObj = {}

fs.readFile('file1.txt',function(err,data){
    if(!err){
        myObj['data1'] = data.toString()
        fs.readFile('file2.txt',function(err,data){
            if(!err){
                myObj['data2'] = data.toString()
                console.log(myObj);
            }
        })
    }
})