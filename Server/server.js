var express = require('express');
var path = require('path');
var app = express();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(process.env.PORT || 3000);
console.log("up and running")