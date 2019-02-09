var fs = require('fs');

var myObj = {}

function doA(){
    return new Promise(function(resolve,reject){
        fs.readFile('file1.txt',function(err,data){
            if(!err){
                resolve(data.toString())
                
            }
        })
    })
}

function doB(){
    return new Promise(function(resolve,reject){
        fs.readFile('file2.txt',function(err,data){
            if(!err){
                resolve(data.toString())
                
            }
        }) 
    })
}


async function main(){
    myObj['data1'] = await doA();
    myObj['data2'] = await doB();
    console.log(myObj);
}

main();