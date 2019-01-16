var fs = require('fs');
var stream;
stream = fs.createReadStream("C://movies//note.txt");
stream.on("data",function(data){
    var chunk = data.toString();
    console.log(chunk);
    
})

/* fs.readFile('/file.json', (err, data) => {
    if (err !== null) {
      //handle error
      console.log(err)
      return
    }
    //no errors, process data
    console.log(data)
  }) */