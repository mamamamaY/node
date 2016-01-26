var fs = require('fs');
fs.readFile('fs.txt', 'utf-8', function(err, data){
    if(err){
        return console.log(err);
    }
    else{
        console.log(data);
    }
});
