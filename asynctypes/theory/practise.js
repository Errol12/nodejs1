var fs = require('fs');

fs.readFile('../file1.txt',function(err,data){
    if(!err)
        console.log('2'+data.toString());
})

console.log('Program ended');

//Promises
function doA(){
    return new Promise((resolve,reject) =>{
        fs.readFile('../file1.txt',(err,data)=>{
            resolve(data.toString())
        })
    })
}


doA().then(function(data){
    console.log('1'+data)
})
console.log('Program ended');

//Async and Await
async function main(){
    console.log('3'+(await doA()));
}
main();
console.log('Program ended');
