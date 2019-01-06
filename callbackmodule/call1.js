var fs = require('fs');

// function getAnimals(filepath,done){
//     fs.readFile(filepath,function(err,animals){
//         if(err) return done(err);
//         console.log(animals.toString().split('\n'));
//     })
// }

// getAnimals("bear.txt",function(err,animals){
//     console.log(animals);
// })
var chunk;
var stream = fs.createReadStream("bear.txt");
stream.on('data',function(data){
    chunk = data.toString().split('\n');
    //console.log(chunk[0]);
    for(i = 0 ; i < chunk.length; i++)
    {
        //console.log(chunk[i]);
    }
})

var bears = ['grizzly','polar','brown'];
var count = bears.length;
bears = bears.map(function(bear){
    var img = new Image();
    img.onload = function(){
        next();
    }
})

function next(){
    count--;
    if(count < 1){
        console.log(bears);
    }
}