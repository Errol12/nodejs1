var fs = require('fs');
var stream = fs.createReadStream("C://movies//read.txt");
var outputstream = fs.createWriteStream("C://movies//note.txt");

stream.pipe(outputstream);