var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var HOME = "index.html";

var message = function(file) {
  file = file || HOME;
  var buf = new Buffer(nfs.readFileSync(file));
  return(buf.toString());
};

app.get('/', function(request, response) {
  response.send(message());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
