var fs = require("fs");

fs.readFile('../file1.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");


console.log("Using promises");
function doA(){
    return new Promise(function(resolve,reject){
        fs.readFile('../file1.txt', function (err, data) {
            if (err) return console.error(err);
            resolve(data.toString());
         });
    })
}
doA().then(function(data){
console.log(data);
});
console.log('Prog ended');


console.log('Using async / await');
async function main(){
    console.log((await doA()));
}
main();
console.log('Prog ended');